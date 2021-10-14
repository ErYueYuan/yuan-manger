 //颜色转换RGB=>十六进制  >>  << 位移运算符  以32位0000为基准  
      //r << 16 向左位移24位
      const rgb = (r,g,b)=>"#"+((1<<24)+(r<<16)+(g<<8)+b).toString().slice(1)
      
      console.log(rgb(0,51,255));