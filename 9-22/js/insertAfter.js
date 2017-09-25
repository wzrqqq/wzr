			
			
			
			//elelment后面插入元素
			HTMLElement.prototype.insertAfter = function(element){
				let next = this.nextElementSibling;
				let parent = this.parentNode;
				if (next) {
					parent.insertBefore(element,next);
					
				}else{
					parent.appendChild(element);
				}
			}
			

			//prependchild()往当前元素前面插入
			

			HTMLElement.prototype.prependchild = function(element){
				let first = this.firstElementChild
				if (first) {
					this.insertBefore(element,first);
					
				}else{
					this.appendChild(element);
				}
				
				
			}






			//appendTo
			HTMLElement.prototype.preappendchild = function(element){
				element.appendChild(this);				
			}
			

			//prependTo
			HTMLElement.prototype.prependTo = function(element){
				element.prepend(this);
			}
			


			//empty
			HTMLElement.prototype.empty = function(){
				/*let child = this.children
				for (let i=child.length-1;i>=0;i--) {
					this.removeChild(child([i]));
					child[i] = null;
				}*/
				this.innerHTML = '';
			}