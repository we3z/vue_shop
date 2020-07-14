<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card class="box-card">
      <el-row>
        <el-col>
          <el-button type="primary" size="small" @click="addDialogVisiable = true">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 角色列表区域 -->
      <el-table :data="rolesList" stripe border>
        <!-- 展开列 -->
        <el-table-column type="expand">
          <template slot-scope="scope2">
            <el-row
              :class="['vcenter', 'bdbottom', index1 === 0 ? 'bdtop' : '']"
              :key="item1.id"
              v-for="(item1, index1) in scope2.row.children"
            >
              <!-- 渲染一级权限 -->
              <el-col :span="5">
                <el-tag>{{ item1.authName }}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二级三级权限 -->
              <el-col :span="19">
                <el-row
                  :class="['vcenter', index2 !== 0 ? 'bdtop' : '']"
                  :key="item2.id"
                  v-for="(item2, index2) in item1.children"
                >
                  <el-col :span="6">
                    <el-tag type="success">{{ item2.authName }}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      :key="item3.id"
                      v-for="item3 in item2.children"
                    >{{ item3.authName }}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column prop="level" label="操作">
          <template slot-scope="scope1">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="editRole(scope1.row.id)"
            >编辑</el-button>
            <el-button
              type="danger"
              size="mini"
              icon="el-icon-delete"
              @click="deleteRole(scope1.row.id)"
            >删除</el-button>
            <el-button type="warning" size="mini" icon="el-icon-setting">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 添加角色对话框 -->
    <el-dialog title="新增角色" :visible.sync="addDialogVisiable" width="30%">
      <el-form :model="addRoleForm" :rules="addRoleFormRule" ref="addRoleFormRef">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addRoleForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addRoleForm.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisiable = false">取 消</el-button>
        <el-button type="primary" @click="addRoleFormSubmit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改角色 -->
    <el-dialog
      title="编辑角色"
      :visible.sync="editDialogVisiable"
      width="30%"
    >
      <el-form :model="editRoleForm" :rules="editRoleFormRule" ref="editRoleFormRef">
        <el-input type="hidden" v-model="editRoleForm.roleId" autocomplete="off"></el-input>
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editRoleForm.roleName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editRoleForm.roleDesc" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editRoleFormSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolesList: [],
      pagenum: 1,
      total: 1,
      addDialogVisiable: false,
      addRoleForm: {
        roleName: '',
        roleDesc: ''
      },
      addRoleFormRule: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ]
      },
      // 编辑角色相关信息
      editDialogVisiable: false,
      editRoleForm: {
        roleId: '',
        roleName: '',
        roleDesc: ''
      },
      editRoleFormRule: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.rolesList = res.data
    },
    // 处理添加权限窗口关闭
    handleClose() {
      this.addDialogVisiable = false
      this.addRoleForm.roleName = ''
      this.addRoleForm.roleDesc = ''
    },
    // 处理新增角色
    addRoleFormSubmit() {
      this.$refs.addRoleFormRef.validate(async valid => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.post('roles', this.addRoleForm)
        if (res.meta.status !== 201) {
          this.$message.error(res.meta.msg)
        } else {
          this.$message.success(res.meta.msg)
          this.addDialogVisiable = false
          this.addRoleForm.roleName = ''
          this.addRoleForm.roleDesc = ''
        }
      })
    },
    // 编辑角色，查询角色详情
    async editRole(id) {
      const {data : res} = await this.$http.get(`roles/${id}`)
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.editRoleForm.roleId = res.data.roleId 
      this.editRoleForm.roleName = res.data.roleName
      this.editRoleForm.roleDesc = res.data.roleDesc
      this.editDialogVisiable = true
    },
    // 处理新增角色
    editRoleFormSubmit() {
      this.$refs.editRoleFormRef.validate(async valid => {
        if (!valid) {
          return
        }
        const { data: res } = await this.$http.put(`roles/${this.editRoleForm.roleId}`, this.addRoleForm)
        if (res.meta.status !== 201) {
          this.$message.error(res.meta.msg)
        } else {
          this.$message.success(res.meta.msg)
          this.editDialogVisiable = false
          this.editRoleForm.roleId = ''
          this.editRoleForm.roleName = ''
          this.editRoleForm.roleDesc = ''
        }
      })
    },
    deleteRole(id) {}
  },
  created() {
    this.getRolesList()
  }
}
</script>

<style lang="less" scoped>
.el-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eeeeee;
}
.bdbottom {
  border-bottom: 1px solid #eeeeee;
}
.vcenter {
  display: flex;
  align-items: center;
}
</style>
