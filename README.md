# api封装

1.src下新建api文件夹

2.vue文件中import API from "@/api/api_user"

3.调用： 
            
         let params = {

            username:'admin',
            
            psd:'123456'
            
         };
         
         API.login(params).then(res=>{
         
            console.log(res)
            
         })
