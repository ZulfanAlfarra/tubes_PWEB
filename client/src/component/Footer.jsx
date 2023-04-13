import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import Instagram from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {
    return (
        <div className='footer bg-[#112D4E] text-[#F9F7F7] text-center'>
            <p className='py-2'>Follow Us On Social Media :</p>
            <div className='sosmed my-1'>
                <a className='px-2 hover:text-[#3F72AF] ' target='_blank' href='https://www.instagram.com/zulfansyahidan/'><InstagramIcon fontSize='large' /></a>
                <a className='px-2 hover:text-[#3F72AF] ' target='_blank' href='https://www.facebook.com/zulfan.alfarra'><FacebookIcon fontSize='large' /></a>
                <a className='px-2 hover:text-[#3F72AF] ' target='_blank' href='https://twitter.com/maranzano26'><TwitterIcon fontSize='large' /></a>
            </div>
            <p className='py-2'>&copy; 2022 ZullfanSyahidanAlfarra</p>
        </div>
    )
}


export default Footer