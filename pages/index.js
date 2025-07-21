import Header from "@/components/Header";
import Leftbar from "@/components/Leftbar";
import MainFeed from "@/components/MainFeed";

function index(){
  const name="Subash"
  return(
    <div class="container content">
  
      <Leftbar/>
     <MainFeed/>

    </div>
  )
}

export default index;