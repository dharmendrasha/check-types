import { lookup } from 'dns'

export default function doesDomainExists(
    url: string | URL
): Promise<Boolean>{

    return new Promise((res, rej) => {

        try{
            if(typeof url === 'string'){
                url = url.includes('https://') ? url : 'https://' + url
                url = new URL(url)
            }
    
            lookup(url.hostname, (err) => {
                if(err){
                    res(false)
                    return
                }
    
                res(true)
            })
        }catch(e){
            rej(e)
            return
        }
       
    })



}