export default class ApiFeatures{
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr;
    }

    pagination(reslutPerPage){
         const currentPage = Number(this.queryStr.page) || 1;
         const skip = reslutPerPage *(currentPage - 1);
         this.query = this.query.limit(reslutPerPage).skip(skip);
         console.log(this);
         return this;
    }

}
