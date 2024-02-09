import OrgContentFeed from "@/components/OrgContentFeed"
import UserHeader from '@/components/UserHeader';

const Publicaciones = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <UserHeader/>
           <OrgContentFeed/>
        </div>
    )
}
export default Publicaciones