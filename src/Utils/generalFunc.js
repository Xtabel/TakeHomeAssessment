const generalFunc = {
    truncateText:(text, maxLength)=> {
        if (text.length > maxLength) {
            const truncatedText = text.substring(0, maxLength).trim();
            return truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(' '))) + '...';
        }
        return text;
    },
    findCategories:(array)=> {
        const categoryArray = {};
        const result = [];
      
        array?.forEach(obj => {
          const item = obj?.category;
          if (!(item in categoryArray)) {
            categoryArray[item] = obj; 
            result.push(obj); 
          }
        });
      
        return result;
      }

  };
  
  export default generalFunc;
  