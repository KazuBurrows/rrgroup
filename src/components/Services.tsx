export default function Services() {
  return (
    <>
      <div className="container bg-blue">
        <div className="bg"></div>
        <section className="services relative" id="services">
          <h2 className="oswald-font text-white-light text-3xl leading-none uppercase text-center">
            Services
          </h2>
          <h3 className="service-sub-title sawarabi-font text-white-light text-xl uppercase text-center">
            Business Subsidiaries
          </h3>

          <br className="mt-6" />
          <div className="myServicesList">
            <div className="accounting flex my-service w-11/12 bg-white">
              <img src="https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-128.jpg?t=st=1732917032~exp=1732920632~hmac=701d7683f1653af0ba926393de84e0bb9b5af1d5ad1326efd0e4a991fd9875ca&w=1380" />
              <div className="inside-my-service w-4/6 px-16 pt-8">
                <h3 className="oswald-font text-blue-dark text-base uppercase tracking-wide">
                  Accounting
                </h3>
                <h2 className="oswald-font text-blue-dark text-xl uppercase tracking-wide leading-none">
                  TBAccounting
                </h2>
                <p className="roboto-font text-blue-dark pt-8 ">
                  From the visible to the invisible, these are the unsung heroes
                  who have supported the lives of local communities and people.
                  The project story of “Matsushita-san” and his friends.
                </p>
                <p className="service-tags roboto-font text-white uppercase pt-4">
                  <span className="bg-blue-dark p-1 px-4">Bookkeeping</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">Tax</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">PAYE</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">Income Tax</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">GST</span>
                </p>
                <p className="button roboto-font pt-8 text-blue-dark float-right">
                  <a href="http://tbaccounting.rrgroup.co.nz/" target="_blank">
                    Learn More...
                  </a>
                </p>
              </div>
            </div>

            <div className="accounting flex my-service w-11/12 bg-white">
              <div className="inside-my-service w-4/6 px-16 pt-8">
                <h3 className="oswald-font text-blue-dark text-base uppercase tracking-wide">
                  Testing and Tagging
                </h3>
                <h2 className="oswald-font text-blue-dark text-xl uppercase tracking-wide leading-none">
                  R&R Tagging and Testing
                </h2>
                <p className="roboto-font text-blue-dark pt-8 ">
                  My driving force is ``I love my job.'' A person who has a
                  direct feeling for the local community and is passionate about
                  manufacturing that contributes to the local community and
                  society at various sites. This is the Matsushita group.
                </p>
                <p className="service-tags roboto-font text-white uppercase pt-4">
                  <span className="bg-blue-dark p-1 px-4">RCD</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">
                    Earth Loop Impedance
                  </span>{" "}
                  <span className="bg-blue-dark p-1 px-4">
                    Portable Appliance
                  </span>
                </p>
                <p className="button roboto-font pt-8 text-blue-dark float-right">
                  <a
                    href="http://rrtestingtagging.rrgroup.co.nz/"
                    target="_blank"
                  >
                    Learn More...
                  </a>
                </p>
              </div>
              <div>
                <img src="https://img.freepik.com/free-photo/male-electrician-works-switchboard-with-electrical-connecting-cable_169016-15204.jpg?t=st=1734380330~exp=1734383930~hmac=49680600b8fd51ba64609a6c1e85de2e55e8711a53f9b7c9ab86bdde91820f6a&w=1380" />
              </div>
            </div>

            <div className="accounting flex my-service w-11/12 bg-white">
              <img src="https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?t=st=1732918083~exp=1732921683~hmac=b8aa26d9da482a66e0ac45d8b327dcc28ef1ef7e2aff96c99fd5de996bc29eab&w=1380" />
              <div className="inside-my-service w-4/6 px-16 pt-8">
                <h3 className="oswald-font text-blue-dark text-base uppercase tracking-wide">
                  Cleaning
                </h3>
                <h2 className="oswald-font text-blue-dark text-xl uppercase tracking-wide leading-none">
                  Business Name
                </h2>
                <p className="roboto-font text-blue-dark pt-8 ">
                  Work is not everything in life, but meeting many people can
                  turn into joy, sometimes bring about suffering, and by facing
                  yourself thoroughly, you can create a way of life that is
                  unique to you and no one else's.
                </p>
                <p className="service-tags roboto-font text-white uppercase pt-4">
                  <span className="bg-blue-dark p-1 px-4">_</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">_</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">_</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">_</span>{" "}
                  <span className="bg-blue-dark p-1 px-4">_</span>
                </p>
                <p className="button roboto-font pt-8 text-blue-dark float-right">
                  <a href="about">Learn More...</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
