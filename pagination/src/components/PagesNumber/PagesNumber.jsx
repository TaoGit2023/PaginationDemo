

const PagesNumber = ({numberPages,pageNumberClicked})=>{
    const pageNumber =[];
    for(let i=1;i<numberPages;i++){
        pageNumber.push(i);
    }
    return (
      <div>
        {pageNumber.map((page)=>{
            return(
                <span key={page} onClick={()=>pageNumberClicked(page)}>{page}</span>
            )
        })}
      </div>
    );
}

export default PagesNumber