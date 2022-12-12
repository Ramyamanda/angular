import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  ngOnInit(): void {
  }
  str= 'mandaramyachowdary'
  string= "     ramya manda         "
  str1=this.str.length
  str2=this.str.slice(5,10)
  str3=this.str.replace("mandaramyachowdary","vinnu")
  str4=this.str.charAt(5)
  str5=this.str.substring(5,10)
  str6=this.str.substr(5,5)
  str7=this.str.toUpperCase()
  str8=this.str7.toLocaleLowerCase()
  str9=this.str.concat(' ',this.str2)
  str10=this.string.trim()
  str11=this.string.trimEnd()
  str12=this.string.trimStart()
  str13=this.str.split("")
  str14=this.str.charCodeAt(5)
  
  std=["Banana", "Orange", "Apple", "Mango"]
  array1=this.std.length
  array2=this.std.toString()
  array3=this.std.join("*")
  array4=this.std.pop()
  array5=this.std.push("kiwi")
  array6=this.std.shift()
  array7=this.std.unshift("graps")
  array8=this.std.slice(1,3)
  array9=this.std.splice (3)  
  array10=this.std.values()
  array11=this.std.sort()
 
  constructor() { }

}
