import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService} from './../users/users.service'
import * as bcrypt from 'bcryptjs'
import { environment } from '../common/environment'

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async validadeUser(userEmail: string, userPassword: string){
        
        const user = await this.usersService.consutarUserEmail(userEmail)
        if(user){
            const isMatch = await bcrypt.compareSync(userPassword, user.password)

            if(user && isMatch === true){
                const { _id, nome, email } = user
                return { _id, nome, email }
            }
        }
        
        return null
    }

    async   login(user: any){
        const payload = { email: user.email, sub: user.sub }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
