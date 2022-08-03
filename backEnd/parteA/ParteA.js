import { promises } from "fs";
const path = "./parteA/data"

export const sortUsers = async () =>{

    let partA = {
        'auth_module': {
        },
        'content_module':{
        }
    };

    const files = await promises.readdir(path);
    for (const file of files){

        const user = await promises.readFile(`${path}/${file}`); 
               
        if(partA.content_module.hasOwnProperty((JSON.parse(user.toString())["provider"]["content_module"]))){
            partA.content_module[(JSON.parse(user.toString())["provider"]["content_module"])].push(file);
        }else{                
            partA.content_module[(JSON.parse(user.toString())["provider"]["content_module"])] = [file];
        }
                    
        if(partA.auth_module.hasOwnProperty((JSON.parse(user.toString())["provider"]["auth_module"]))){
            partA.auth_module[(JSON.parse(user.toString())["provider"]["auth_module"])].push(file);
        }else{                
            partA.auth_module[(JSON.parse(user.toString())["provider"]["auth_module"])] = [file];
        }
    }
    
    return partA
      
}

