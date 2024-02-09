import axios from "axios";

export default async function loginApi(id:string, pw:string, autoLogin:boolean) {
    if(!id) return alert("아이디를 입력해주세요");
    if(!pw) return alert("비밀번호를 입력해주세요");
    
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_DB_LINK}/api/login`, {
            id,
            pw,
            autoLogin
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data; 
    } catch (error) {
        console.error(error);
        throw new Error('로그인에 실패했습니다');
    }
}