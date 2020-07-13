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
          <el-button type="primary" size="small">添加角色</el-button>
        </el-col>
      </el-row>

      <el-table :data="rolesList" stripe border>
        <el-table-column type="expand">
          <template slot-scope="props1">
            <el-table :data="props1.row.children" stripe border>
              <el-table-column type="expand">
                <template slot-scope="props2">
                  <el-table :data="props2.row.children" stripe border>
                    <el-table-column
                      type="index"
                      label="#"
                      width="50"
                    ></el-table-column>
                    <el-table-column prop="authName" label="角色名称">
                    </el-table-column>
                    <el-table-column prop="path" label="角色描述">
                    </el-table-column>
                    <el-table-column prop="level" label="操作">
                      <template slot-scope="scope1"> </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column
                type="index"
                label="#"
                width="50"
              ></el-table-column>
              <el-table-column prop="authName" label="角色名称">
              </el-table-column>
              <el-table-column prop="path" label="角色描述"> </el-table-column>
              <el-table-column prop="level" label="操作">
                <template slot-scope="scope2"> </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#" width="50"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column prop="level" label="操作">
          <template slot-scope="scope3"> </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolesList: [],
      pagenum: 1,
      total: 1
    }
  },
  methods: {
    async getRolesList() {
      const { data: res } = await this.$http.get('roles')
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.rolesList = res.data
    }
  },
  created() {
    this.getRolesList()
  }
}
</script>

<style lang="less" scoped></style>
