import React from 'react';
import CommonLayout from '../../../components/shop/common-layout'
import ProfilePage from './common/profile';

const VendorProfile = () => {
    return (
        <CommonLayout parent="home" title="Vendor Profile">
            <ProfilePage />
        </CommonLayout>
    )
}

export default VendorProfile;