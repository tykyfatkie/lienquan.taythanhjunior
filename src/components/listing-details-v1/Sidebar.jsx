import ContactWithAgent from "../common/agent-view/ContactWithAgent";
import Categorie from "../common/listing/Categorie";
import ListingCreator from "../common/listing/ListingCreator";
import FeaturedListings from "../common/listing/FeaturedListings";
import FeatureProperties from "../common/listing/FeatureProperties";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_listing_list">
        <div className="search_option_button">
          <button
            type="button"
            className="btn btn-block btn-thm w-100"
            onClick={() => window.location.href='https://forms.gle/EwAH9DmbdJwpCu4n8'}>
            Đăng ký
          </button>
        </div>
      </div>
      {/* End .sidebar_listing_list */}

      <div className="terms_condition_widget">
        <h4 className="title">Liên quan</h4>
        <div className="sidebar_feature_property_slider">
          <FeatureProperties />
        </div>
      </div>
      {/* End .Featured Properties */}



    </>
  );
};

export default Sidebar;
