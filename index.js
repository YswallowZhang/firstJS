function Person(name) {
	
    this.name = name;
    this.toString = function anotherTostring() {
	    return this.name;
	};
    Person.prototype.count++;
}
Person.prototype.count = 0;

var ling = new Person("ling");
var long = new Person("long");
console.log(ling.toString());
console.log(long.toString());
console.log(ling.count);       
console.log(long.count);  
var another = new Person('ha');    
console.log(ling.count);       
console.log(long.count);      
console.log(another.count); 
  



function Complex(a,b) { 
	if (isNaN(a)) {
		alert("请输入合法数字");
	}
    else if(b == 0) {
    	return "变成了实数";
    }
	else {
        this.x = a;
        this.y = b;     	
	    this.mag = Math.sqrt(this.x * this.x + this.y * this.y);
	    this.neg = function() {
	    	
		    	if (this.y == 1 && this.x!=0) {
		    		return  -this.x +" - "+"i";
		    	}
		    	else if (this.y == -1 && this.x!=0) {
		    		return  -this.x +" + "+"i";
		    	 }
		    	else if(this.y == 0){
		    		alert( "您的输入有误");
		    	}
		    	else if(this.x == 0 && this.y != 1 &&this. y != -1) {
		             return   -this.y + "i";
		    	}
		    	else if(this.x == 0 &&this. y == 1 || this.y == -1) {
		             return  "i";
		    	}
		    	else {
		           return  -this.x +" + " + -this.y + "i";
		    	}			        
        };
        this.toString = function anotherTostring() {
			    return "实数部分：" + this.x + " " + "虚数部分：" + this. y;
	    }; 
	    this.equal = function(obj) {
              if((obj.x == this.x) && (obj.y == this.y)) {
              	return true;
              }
              else{
              	return false;
              }
	    }  
	    this.add = function(obj) {             
              return  new Complex(this.x + obj.x,this.y + obj.y);	         
	    }
	    this.mul = function(obj) {              
              return  new Complex(this.x*obj.x-this.y*obj.y,this.y*obj.x + this.x*obj.y);	         
	    }
	}
        
} 
var num1 = new Complex(1,1);
var num2 = new Complex(-1,-1);
console.log(num1.neg());
console.log(num2.neg());
console.log(num1.mag);
console.log(num2.mag);
console.log(num1.toString());
console.log(num1.equal(num2));
console.log(num1.add(num2));
console.log(num1.mul(num2));
console.log(num1.neg());