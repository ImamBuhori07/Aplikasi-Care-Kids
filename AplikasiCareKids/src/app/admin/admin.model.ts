export class Admin {
    
        
      }


export class Category {
      category_id:number=1
      name_category: string ="" 
      deleted_at: string =""
      created_at: string =""
      updated_at: string =""
      
}

export class saveCategory {
      category_id: number=1
      name_category: string ="" 
      deleted_at: string=""
      created_at: string =""
      updated_at: string =""
}

export class article {
      id:number =1
      title: string =""
      slug: string =""
      thumbnail: any |null
      description: string =""
      created_at: string =""
      author: string =""
      category: string =""
  static articleId: any
}

export class savearticle {
      articleId!: number
      title: string =""
      slug: string =""
      thumbnail: any |null
      description: string =""
      created_at: string =""
      author: string =""
      category: string =""
  
}

export class statusarticle {
      name_status:string =""
      updated_at:string =""
      created_at:string ="" 
}

export class savestatusarticle {
      name_status:string =""
      updated_at:string =""
      created_at:string ="" 
}


