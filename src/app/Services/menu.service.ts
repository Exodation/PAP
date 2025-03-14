import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient){}

    async GetMenuItems(category:any = null){
        const UsersUrl = new URL("http://localhost:3000/menu");
        if (category != "All" && category){
          UsersUrl.searchParams.append('category', category);
        }
        const Result = await fetch(UsersUrl)
        return await Result.json()
    }

    async InsertMenuItem(name:string, category:string, price:number, filename:any){
      const UsersUrl = new URL("http://localhost:3000/menu");
      
      const Result = await fetch(UsersUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          product: name,
          category: category,
          price: price,
          image_path: filename,
          active: true
        })
      })

      const ConvResult = await Result.json()
     
      return ConvResult
  }

    async GetCategories(category:any = null){
      const UsersUrl = new URL("http://localhost:3000/menu/categories");
      UsersUrl.searchParams.append('category', category);
      const Result = await fetch(UsersUrl)
      return await Result.json()
  }
}