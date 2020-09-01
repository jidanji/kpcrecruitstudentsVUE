  <template>
  <div>
    <div id="a1" class="a1">
      <Form ref="form" labelWidth="80" layout="inline" @submit="searchClick">
        <FormItem  label="学生姓名" model="searchForm.studentName">
          <Input placeholder="请输入学生姓名" v-model="searchForm.studentName" />
        </FormItem>
        <FormItem label="身份证号" model="searchForm.studentIDCard">
          <Input placeholder="请输入身份证号" v-model="searchForm.studentIDCard" />
        </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit">查询</Button>
        </FormItem>
      </Form>
    </div>

    <div id="a2" class="a2"
    >
      <Button type="primary">录入学生信息</Button>
    </div>


    <Table
      :fixHeader="elCss.leftHeight"
      :loading="loadingStatus.tableLoading"
      :data="dataSource.studentsArray"
      resizable
      :stripe="true"
      ref="multipleTable"
    >
      <TableColumn minWidth="40" key="kop" title="序号" :template="setIndex" />

      <TableColumn minWidth="70" key="StudentName" title="学生姓名" />

      <TableColumn minWidth="140" key="StudentIDCard" title="身份证号码" />
      <TableColumn minWidth="80" key="StudentType" title="学生性质" />

      <TableColumn minWidth="100" key="UserPhone" title="联系方式" />
      <TableColumn minWidth="100" key="UserName" title="推荐人" />

      <TableColumn minWidth="150" key="UserDeptName" title="推荐人部门" />

      <TableColumn minWidth="150" key="kop1" title="上传时间" fixed="right" :template="datetimeFMT" />
    </Table>

    <Pagination :total="pager.recordsTotal"   @change="currentChange" />
  </div>
</template>

<script>
import { Table, TableColumn } from "kpc-vue/components/table";

import { Form, FormItem } from "kpc-vue/components/form";
import { Input } from "kpc-vue/components/input";

import Message from "kpc-vue/components/message";

import Pagination from "kpc-vue/components/pagination";

import { Row, Col } from "kpc-vue/components/grid";

import {ButtonGroup, Button} from 'kpc-vue/components/button';

import {
  fetchStudent,
  addStudent,
  deleteStudentById,
  updateStudent,
} from "@/services/student";
import { fetchZhuanYeDict } from "@/services/dictinfo";
import DateFMT from "@/utils/DateFMT";

import $ from "jquery";

export default {
  components: {
    Table,
    TableColumn,
    Pagination,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    Button
  },
  data() {
    var defaultValue = {
      StudentAddress: "",
      StudentName: "",
      StudentId: "",
      StudentIDCard: "",
      StudentPhone: "",
      StudentType: "",
      StudentSchool: "",
      UserId: "",
      UserPhone: "",
      UserName: "",
      UserDeptId: "",
      UserDeptName: "",
      StudentZhuanYeId: "",
      StudentZhuanYeValue: "",
      InsertTime: "",
      UpdateTime: "",
      Remark: "",
      Area: "",
      Sex: "",
      ReStudentIDCard: "",
    };
    return {
      formOp: "",
      nuli: "正在努力查询数据",
      elCss: {
        leftHeight: 0,
      },
      dataSource: {
        zhuanyeArray: [],
        studentsArray: [],
      },
      vStatus: {
        dialogEditFormVisible: false,
        dialogViewFormVisible: false,
      },
      loadingStatus: {
        tableLoading: false,
        editLoading: false,
      },
      pager: {
        recordsTotal: 0,
        currentPage: 1,
        pageSize: 50,
      },
      initForm: { ...defaultValue },
      editForm: { ...defaultValue },
      searchForm: {
        studentName: "",
        studentIDCard: "",
      },
      formLabelWidth: "120px",
      rules: {
        StudentName: [
          { required: true, message: "学生姓名必须输入", trigger: "blur" },
        ],
        Sex: [{ required: true, message: "性别必须选择", trigger: "change" }],
        Area: [
          { required: true, message: "考生地区必须选择", trigger: "change" },
        ],
        StudentIDCard: [
          { required: true, message: "身份证必须输入", trigger: "blur" },
        ],
        ReStudentIDCard: [
          { required: true, message: "身份证必须输入", trigger: "blur" },
        ],
        StudentType: [
          { required: true, message: "学生性质必须选择", trigger: "change" },
        ],
        StudentSchool: [
          { required: true, message: "毕业中学必须输入", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    let that = this;
    this.getStudentArray();
    this.getZhuanyeDict();
    this.$nextTick(() => {
      that.autoHeight();
    });
  },
  created() {},
  computed: {
    pageCount: function () {
      let { recordsTotal, pageSize } = this.pager;
      var ret = parseInt(recordsTotal / pageSize);
      if (recordsTotal % pageSize != 0) {
        ret += 1;
      }
      return ret;
    },
  },
  filters: {
    emptyTxt: function (val) {
      return val ? val : "------------";
    },
  },

  methods: {
    _onChange() {},
    autoHeight() {
      this.elCss.leftHeight =
        $(window).height() -
        $("#a1").outerHeight(true) -
        $("#a2").outerHeight(true) -
        120;
    },
    batchOps() {
      alert("批量操作");
    },
    outExcel() {
      let url = `/api/Student/OutExcel?studentName=${this.searchForm.studentName}&&studentIDCard=${this.searchForm.studentIDCard}`;
      window.open(url);
    },
    async viewDetail(row) {
      row.ReStudentIDCard = row.StudentIDCard;

      this.vStatus.dialogViewFormVisible = true;
      Object.assign(this.editForm, this.initForm);
      this.$nextTick(() => {
        Object.assign(this.editForm, row);
      });
    },
    async editDialog(row) {
      row.ReStudentIDCard = row.StudentIDCard;
      this.formOp = "edit";
      Object.assign(this.editForm, this.initForm);
      this.vStatus.dialogEditFormVisible = true;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
        Object.assign(this.editForm, row);
      });
    },
    addDialog() {
      this.formOp = "add";
      Object.assign(this.editForm, this.initForm);
      this.vStatus.dialogEditFormVisible = true;
      this.$nextTick(() => {
        this.$refs["ruleForm"].resetFields();
      });
    },
    async deleteDialog(row) {
      try {
        this.loadingStatus.tableLoading = true;
        this.nuli = "正在删除数据";
        let { StudentId } = row;
        var params = {
          data: { StudentId },
        };
        var res = await deleteStudentById(params);
        this.loadingStatus.tableLoading = false;
        this.getStudentArray();
      } catch (e) {
        this.loadingStatus.tableLoading = false;
      }
    },

    async test() {
      // console.log(this.editForm.StudentName);
      // debugger;
      // this.$refs["ruleForm"].resetFields();
      // this.loadingStatus.tableLoading = true;
      // this.nuli = "正在删除数据";
      alert(this.pageCount);
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          debugger;
          if (this.formOp == "add") {
            this.addData();
          } else if (this.formOp == "edit") {
            this.updateData();
          } else {
            console.log(this.formOp);
            alert("我不知道该干什么");
          }
        } else {
          return false;
        }
      });
    },
    searchClick() {
      this.pager.currentPage = 1;
      this.getStudentArray();
      this.$refs.multipleTable.scrollToRowByIndex(0)
    },
    currentChange({current:c, limit}) {
      this.pager.currentPage = c;
      this.getStudentArray();
       this.$refs.multipleTable.scrollToRowByIndex(0)
    },
    sizeChange(c) {
      this.pager.pageSize = c;
      this.pager.currentPage = 1;
      this.getStudentArray();
      this.$refs.multipleTable.bodyWrapper.scrollTop = 0;
    },

    async addData() {
      try {
        this.loadingStatus.editLoading = true;
        const retData = await addStudent({ data: this.editForm });
        this.vStatus.dialogEditFormVisible = false;
        this.loadingStatus.editLoading = false;
        this.currentPage = 1;
        await this.getStudentArray();
      } catch (e) {
        alert(e.toString());
        this.loadingStatus.editLoading = false;
      }
    },

    async updateData() {
      try {
        this.loadingStatus.editLoading = true;
        var formData = { data: this.editForm };
        var StudentId = this.editForm;
        Object.assign(formData, { StudentId });
        const retData = await updateStudent(formData);
        this.vStatus.dialogEditFormVisible = false;
        this.loadingStatus.editLoading = false;
        this.currentPage = 1;
        await this.getStudentArray();
      } catch (e) {
        alert(e.toString());
        this.loadingStatus.editLoading = false;
      }
    },

    async fetchData() {
      var para = {
        data: {
          draw: 1,
          start: (this.pager.currentPage - 1) * this.pager.pageSize,
          length: this.pager.pageSize,
          StudentName: this.searchForm.studentName,
          StudentIDCard: this.searchForm.studentIDCard,
        },
      };
      return await fetchStudent(para);
    },

    async getZhuanyeDict() {
      let params = { data: {} };
      const retData = await fetchZhuanYeDict(params);
      this.dataSource.zhuanyeArray = retData;
    },

    async getStudentArray() {
      try {
        this.loadingStatus.tableLoading = true;
        this.nuli = "正在努力查询数据";
        var {
          data,
          draw,
          recordsTotal,
          recordsFiltered,
        } = await this.fetchData();

        this.pager.recordsTotal = recordsTotal;
        //马良书写这个业务。
        if (this.pager.currentPage > this.pageCount && this.pageCount > 0) {
          this.pager.currentPage = this.pageCount;
          var gb = await this.fetchData();
          data = gb.data;
          draw = gb.draw;
          recordsTotal = gb.recordsTotal;
          recordsFiltered = gb.recordsFiltered;
        }

        this.dataSource.studentsArray = data;
        this.loadingStatus.tableLoading = false;
        this.pager.recordsTotal = recordsTotal;
      } catch (err) {
        this.loadingStatus.tableLoading = false;
        this.$message.error(err.toString());
      }
    },
    datetimeFMT(data, index) {
      return new DateFMT().datetimeFormate(data.UpdateTime);
    },
    setIndex(data, index) {
      return index + 1 + (this.pager.currentPage - 1) * this.pager.pageSize;
    },
  },
};
</script>

<style lang="stylus">
.a1
  padding-top 10px
.a2
 padding-bottom 10px
</style>


