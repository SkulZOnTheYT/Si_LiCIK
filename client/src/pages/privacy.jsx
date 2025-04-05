import PageMeta from "../component/common/PageMeta";

export default function Privacy() {
    return (
      <main className="min-h-screen bg-base-100 py-12 px-4 sm:px-6 lg:px-8">
        <PageMeta title="Privacy Policy | SiLiCIK" description="Privacy Policy page" />
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-base-content mb-4">Privacy Policy</h1>
            <p className="text-sm text-base-content/70">Last updated: April 03, 2025</p>
          </div>
  
          {/* Content Container */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="card bg-base-200 shadow-xl p-6 mb-8">
              <p className="mb-4">
                This Privacy Policy describes Our policies and procedures on the collection, 
                use and disclosure of Your information when You use the Service and tells You 
                about Your privacy rights and how the law protects You.
              </p>
              <p>
                We use Your Personal data to provide and improve the Service. By using the 
                Service, You agree to the collection and use of information in accordance 
                with this Privacy Policy.
              </p>
            </div>
  
            {/* Interpretation and Definitions */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Interpretation and Definitions</h2>
            
            <div className="collapse collapse-plus bg-base-200 mb-4">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Interpretation</div>
              <div className="collapse-content">
                <p>
                  The words of which the initial letter is capitalized have meanings defined 
                  under the following conditions. The following definitions shall have the 
                  same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>
            </div>
  
            <div className="collapse collapse-plus bg-base-200 mb-8">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Definitions</div>
              <div className="collapse-content">
                <p className="mb-4">For the purposes of this Privacy Policy:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Account</strong> means a unique account created for You to access 
                    our Service or parts of our Service.
                  </li>
                  <li>
                    <strong>Affiliate</strong> means an entity that controls, is controlled by 
                    or is under common control with a party...
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as either "the Company", "We", "Us" 
                    or "Our" in this Agreement) refers to Si LiCIK.
                  </li>
                  {/* Tambahkan definisi lainnya sesuai kebutuhan */}
                </ul>
              </div>
            </div>
  
            {/* Collecting and Using Personal Data */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">Collecting and Using Your Personal Data</h2>
            
            <div className="card bg-base-200 shadow-xl p-6 mb-8">
              <h3 className="text-xl font-medium mb-4">Types of Data Collected</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium mb-2">Personal Data</h4>
                  <p className="mb-2">
                    While using Our Service, We may ask You to provide Us with certain 
                    personally identifiable information...
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Usage Data</li>
                  </ul>
                </div>
  
                <div>
                  <h4 className="text-lg font-medium mb-2">Usage Data</h4>
                  <p>
                    Usage Data is collected automatically when using the Service. May include 
                    IP address, browser type, pages visited...
                  </p>
                </div>
  
                <div>
                  <h4 className="text-lg font-medium mb-2">Tracking Technologies and Cookies</h4>
                  <p className="mb-2">We use Cookies and similar tracking technologies...</p>
                  <div className="space-y-4">
                    <div className="alert alert-info">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>You can refuse cookies in your browser settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }