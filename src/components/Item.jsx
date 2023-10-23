import React from 'react'

export default function Item() {
    const features = [
        {
          icon: 'bi bi-collection',
          title: 'Fresh new layout',
          description: 'With Bootstrap 5, we\'ve created a fresh new layout for this template!',
        },
        {
          icon: 'bi bi-cloud-download',
          title: 'Free to download',
          description: 'As always, Start Bootstrap has a powerful collection of free templates.',
        },
        {
          icon: 'bi bi-card-heading',
          title: 'Jumbotron hero header',
          description: 'The heroic part of this template is the jumbotron hero header!',
        },
        {
          icon: 'bi bi-bootstrap',
          title: 'Feature boxes',
          description: 'We\'ve created some custom feature boxes using Bootstrap icons!',
        },
        {
          icon: 'bi bi-code',
          title: 'Simple clean code',
          description: 'We keep our dependencies up to date and squash bugs as they come!',
        },
        {
          icon: 'bi bi-patch-check',
          title: 'A name you trust',
          description: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!',
        },
      ];
  return (
    <div className="container px-lg-5">
    {/* Page Features */}
    <div className="row gx-lg-5">
      {features.map((feature, index) => (
        <div key={index} className="col-lg-4 col-xxl-3 mb-5">
          <div className="card bg-light border-0 h-100">
            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                <i className={feature.icon}></i>
              </div>
              <h2 className="fs-4 fw-bold">{feature.title}</h2>
              <p className="mb-0">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
