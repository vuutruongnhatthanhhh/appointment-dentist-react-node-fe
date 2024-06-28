import {  Image } from "antd";
import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from "./style";
import { StarFilled
   
  } from '@ant-design/icons';
import soldout from '../../assets/image/soldout.png'
import { useNavigate } from "react-router-dom";
import { convertPrice } from "../../utils";

// props là để nhận mấy cái data truyền từ homepage qua
const CardDoctorComponent = (props) => {
  const {countInStock,avatar,name, id} = props
  const navigate = useNavigate()
  const handleDetailProduct = (id) =>{
    navigate(`/doctor-details/${id}`)
  }
 
    // Sản phẩm
    return (
        <WrapperCardStyle
        hoverable
        style={{ width: 200 }}
        bodyStyle={{padding:'10px'}}
        cover={<img alt="example" src={avatar} />}
        onClick={()=> handleDetailProduct(id)}
        
      >
      
       <StyleNameProduct>{name}</StyleNameProduct>
       <WrapperReportText>
      
       </WrapperReportText>
       <WrapperPriceText>
      
       </WrapperPriceText>
      </WrapperCardStyle>
     

    

      
    )
}

export default CardDoctorComponent