

class Apifeatures{
    constructor(query,querystr){
    this.query=query;
    this.querystr=querystr;
    }

    search(){
        const keyword=this.querystr.keyword ? {
            $regex:this.querystr.keyword,
            $options:"i",
        }:{}
        console.log(keyword);
        this.query=this.query.find({ ...keyword})
        return this;
    }
    filter(){
    const querycopy={...this.querystr}
    //recieving fieldfor category
    const removefields=["keyword","paage","limit"]
    

    removefields.forEach(key=>delete querycopy[key])
    //filter for price and rating
    let querystr=JSON.stringify(querycopy)
    querystr=querystr.replace(/\b(gt|gte|lt|lte)\b/g,key =>  `$${key}`)

    this.query=this.query.find(JSON.parse(querystr))
    console.log(querycopy);
    return this;
}
pagination(resultPerpage){
    const currentpage=Number(this.querystr.page) || 1;
   const skip=resultPerpage*(currentpage-1)
   this.query=this.query.limit(resultPerpage).skip(skip)
   return this;
}
}
module.exports=Apifeatures;