			function getClass(classname,ranger){
				ranger = ranger ? ranger : document;
			    if(document.getElementByClassName){						//判断是否有这个方法
			        return ranger.getElementsByClassName(classname);	//有就返回
			       }else{
			         	var newarr = [];
			           	var all = ranger.getElementsByTagName('*');		//获取页面所有元素
			         	for(var i=0;i<all.length;i++){
			                if(checkClass(all[i].className,classname)){
			                  	//all[i].className == classname
			                     newarr.push(all[i]);
			                   }
			            }
			         return newarr;
			       }
				}
			
			
			
			function checkClass(className,classname){
			    var arr = className.split(' ');
			  	for(var i=0;i<arr.length;i++){
			        if(arr[i] == classname){
			             return true;
			           }
			    }
			  return false;
			}
			//console.log(getClass('box'));
			
			
			
			
			
			function $(select,ranger){
				ranger = ranger || document;
			    var first = select.charAt(0);
			  	if(first == '.'){
			         //class
			     	return getClass(select.substring(1),ranger)
			       }else if(first == '#'){
			           //id
			         return ranger.getElementById(select.substring(1));
			       }else if( /^[a-z][a-z1-6]{0,7}$/.test(select) ){
			           //tag
			         return ranger.getElementsByTagName(select)
			       }
  
  				}