

import Breadcrumb from "@/components/Common/Breadcrumb";
import Explores from "@/components/Explores";



export default function Explorer() {

  return (
    <div className="min-h-screen bg-gray-50">
     <Breadcrumb
        pageName="Explorer Tafroute"
        description=""
        />
        <Explores />

 
    </div>
  );
}