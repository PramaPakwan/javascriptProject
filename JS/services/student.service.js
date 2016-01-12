function StudentService(){
	this.studentList=[];

	this.add=function(stu){
		this.studentList.push(stu);
	}

	this.getAll=function(){
		return this.studentList;
	}
}