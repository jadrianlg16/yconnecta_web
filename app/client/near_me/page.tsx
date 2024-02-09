import OrgMap from "@/components/OrgMap";
import UserHeader from '@/components/UserHeader';

const Near_Me = () => {
    return (
        // Flex container with items centered both vertically and horizontally
        <div >
            <UserHeader/>
            <div className="flex items-center justify-center pb-40">
            <OrgMap lat={25.65071745145192} lng={-100.29367771452709} zoom={24} />
            </div>
        </div>
    );
};
export default Near_Me;
