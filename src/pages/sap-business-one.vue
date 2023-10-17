<template>
  <div style="font-family: 'Spartan';">

    <link href='https://fonts.googleapis.com/css?family=Spartan' rel='stylesheet'>


    <q-parallax class="gt-sm" src="../assets/bg102.png" style="height: 650px; margin-top: 80px;">
      <div>
        <div class="row items-center justify-around">
          <div class="col-12 col-md q-pa-xl q-mr-xl">
            <p class="text-h4 text-weight-bold" style="
            font-family: 'Spartan';
            color: #F2F4F8;
            margin-bottom: 40px;
            ">
              SAP Business One for SMEs
            </p>
            <div class="q-gutter-md row items-start">
              <div class="col-6">
                <q-video style="width: 100%; max-width: 317px; height: auto;"
                  src="https://www.youtube.com/embed/8okLqhj3wao?rel=0" />
              </div>
              <div class="col-6" style="color: #F2F4F8; font-family: 'Spartan' ; width: 225px;">
                <p class="text">
                  SAP Business One is a powerful, scalable business management system
                </p>
                <p class="text-weight-bold">Watch video (01:03) </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
            <p class="text-body2" style="width: 510px;
            color: #F2F4F8;
            font-family: 'Spartan';">
              SAP Business One is a powerful, scalable business management system that integrates all core business
              functions across entire company. It gives managers access to critical real-time data,
              enabling them to make quicker, better decisions to help grow
              business. When it comes to financial management, warehouse management, purchasing, inventory, manufacturing,
              banking,
              sales, and customer relationship management and service,<br>
              it has the necessary power to improve business models.
            </p>
          </div>
        </div>
      </div>
    </q-parallax>


    <q-parallax class="lt-md" src="../assets/bg102.png" style="height: 800px;">
      <div>
        <div class="row items-center justify-center">
          <div class="col-12 col-md q-px-xl q-pt-xl q-mx-xl">
            <p class="text-h5 text-weight-bold" style=" font-family: 'Franklin Gothic Medium' , 'Arial Narrow' , Arial,
            sans-serif; color: #F2F4F8; ">
              SAP Business One for SMEs
            </p>
            <p class=" text-subtitle2 " style=" color: #F2F4F8;">
              SAP Business One is a powerful, scalable business management system that integrates all core business
              functions across entire company. It gives managers access to critical real-time data,
              enabling them to make quicker, better decisions to help grow
              business. When it comes to financial management, warehouse management, purchasing, inventory, manufacturing,
              banking,
              sales, and customer relationship management and service,
              it has the necessary power to improve business models.
            </p>

          </div>
          <div class="col-12 col-md q-pa-lg q-mx-xl text-center" style="width: 294px; padding: 0;">
            <q-video :ratio="16 / 9" src="https://www.youtube.com/embed/8okLqhj3wao?rel=0" />
          </div>
        </div>
      </div>
    </q-parallax>


    <!----------------------------------------------------------------------------------------------------->

    <div class="gt-sm flex flex-center" style="margin: 160px 0px 160px;">

      <div class="q-pa-lt" style="width: 1329px; min-height: 895px">
        <q-list>
          <div class="Accordoin-header-title">
            <p class="text-h4" style="color: #3663A8;">The features SAP B1 use</p>
            <p class="text-subtitle1">Empower your business with SAP Business One's features</p>
          </div>
          <q-expansion-item group="somegroup" label="1. Accounting and Financial "
            header-class="text-h5 accordion-header-text" style="margin: 60px 0px 60px;">
            <div
              class="q-item__section column q-focusable relative-position cursor-pointer q-item__section--side justify-center">
              <i aria-hidden="true" role="presentation"
                class="q-expansion-item__toggle-icon q-icon notranslate material-icons q-expansion-item__toggle-icon--rotated">remove</i>
            </div>


            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/finance_final.png" style="max-width: 333px" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Full-suite ERP solution for SMEs</li>
                      <li>Comprehensive accounting and financial tools</li>
                      <li>Automation of daily accounting tasks</li>
                      <li>Real-time integration of financial operations</li>
                      <li>Enhanced visibility into cash flows</li>
                      <li>Increased transaction speed</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="2. Operations and Purchase" header-class="text-h5"
            style="margin: 60px 0px 60px;">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="zoom-in">
                    <q-img src="~assets/purchase_final.png" style="max-width: 333px" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="fade-left">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Systematic procurement process management</li>
                      <li>Order-to-pay cycle oversight</li>
                      <li>Handling of receipts, invoices, returns, and payments</li>
                      <li>Integrated reporting tools for supplier and price comparisons</li>
                      <li>Enhanced negotiation and cost-saving opportunities</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="3. Sales and CRM" header-class="text-h5"
            style="margin: 60px 0px 60px;">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/sales_final.png" style="max-width: 333x;
                      " />
                  </div>

                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Effective customer relationship management (CRM)</li>
                      <li>Customer data and contact management</li>
                      <li>Lead and opportunity tracking</li>
                      <li>Sales pipeline management</li>
                      <li>Sales forecasting and reporting</li>
                      <li>Integration with marketing efforts</li>
                      <li>Customer communication and interaction tracking</li>
                      <li>Sales team collaboration and task management</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="4. Inventory and Distribution " header-class="text-h5"
            style="margin: 60px 0px 60px;">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="zoom-in">
                    <q-img src="~assets/dist.png" style="max-width: 333px" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="fade-left">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Diverse costing models for inventory management</li>
                      <li>Item master data maintenance</li>
                      <li>Multiple units of measure and pricing options</li>
                      <li>Real-time inventory updates and availability checks</li>
                      <li>Standard and special pricing management</li>
                      <li>Comprehensive reporting for impact analysis</li>
                      <li>Streamlined handling of returns and additional expenses</li>
                      <li>Support for multiple currencies</li>
                      <li>Warehouse and accounts integration for real-time synchronization</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="5. Reporting and Administration " header-class="text-h5"
            style="margin: 60px 0px 60px;">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">

                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/report.png" style="max-width: 333px" />
                  </div>

                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right">
                    <p class="text-subtitle1 text-blue-grey-9" style=" font-family: 'Spartan';
                      font-size: 14px;
                      font-style: normal;
                      font-weight: 400;">
                    <ul>
                      <li>Crystal Reports, owned by SAP, is the default reporting tool for many applications and is
                        included with SAP Business One.</li>
                      <li>Crystal Reports connects to SAP Business One databases on MS-SQL and SAP HANA platforms.</li>
                      <li>Integration from sales to production via bill of materials and MRP module streamlines operations
                        and reduces manual work.</li>
                      <li>Serial and batch management for regulatory compliance.</li>
                      <li>Workflow automation reduces data entry duplication.</li>
                      <li>Comprehensive MRP wizard for customized planning scenarios.</li>

                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>


    <div class="lt-md flex flex-center" style="margin: 160px 0px 60px;">

      <div class="q-pa-lt" style="width: 1329px; min-height: 895px">
        <q-list>
          <div class="Accordoin-header-title">
            <p class="text-h5" style="color: #3663A8;">The features SAP B1 use</p>

          </div>
          <q-expansion-item group="somegroup" label="1. Accounting and Financial " header-class=" accordion-header-text"
            style="margin: 60px 0px 60px; font-size: 18px;">
            <div
              class="q-item__section column q-focusable relative-position cursor-pointer q-item__section--side justify-center">
            </div>


            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/finance_final.png" style="max-width: 333px" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right" style="padding: 0; margin: 0;">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan'; ">
                    <ul>
                      <li>Full-suite ERP solution for SMEs</li>
                      <li>Comprehensive accounting and financial tools</li>
                      <li>Automation of daily accounting tasks</li>
                      <li>Real-time integration of financial operations</li>
                      <li>Enhanced visibility into cash flows</li>
                      <li>Increased transaction speed</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="2. Operations and Purchase"
            style="margin: 60px 0px 60px; font-size: 18px;">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/purchase_final.png" style="max-width: 333px; ;" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="fade-left" style="padding: 0; margin: 0;">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Systematic procurement process management</li>
                      <li>Order-to-pay cycle oversight</li>
                      <li>Handling of receipts, invoices, returns, and payments</li>
                      <li>Integrated reporting tools for supplier and price comparisons</li>
                      <li>Enhanced negotiation and cost-saving opportunities</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="3. Sales and CRM" style="margin: 60px 0px 60px; font-size: 18px">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/sales_final.png" style="max-width: 333x;
                " />
                  </div>

                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right" style="padding: 0; margin: 0;">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Effective customer relationship management (CRM)</li>
                      <li>Customer data and contact management</li>
                      <li>Lead and opportunity tracking</li>
                      <li>Sales pipeline management</li>
                      <li>Sales forecasting and reporting</li>
                      <li>Integration with marketing efforts</li>
                      <li>Customer communication and interaction tracking</li>
                      <li>Sales team collaboration and task management</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="4. Inventory and Distribution "
            style="margin: 60px 0px 60px; font-size: 18px">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/dist.png" style="max-width: 333px" />
                  </div>
                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="fade-left" style="padding: 0; margin: 0;">
                    <p class="text-subtitle1 text-blue-grey-9" style="font-family: 'Spartan';">
                    <ul>
                      <li>Diverse costing models for inventory management</li>
                      <li>Item master data maintenance</li>
                      <li>Multiple units of measure and pricing options</li>
                      <li>Real-time inventory updates and availability checks</li>
                      <li>Standard and special pricing management</li>
                      <li>Comprehensive reporting for impact analysis</li>
                      <li>Streamlined handling of returns and additional expenses</li>
                      <li>Support for multiple currencies</li>
                      <li>Warehouse and accounts integration for real-time synchronization</li>
                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-separator />

          <q-expansion-item group="somegroup" label="5. Reporting and Administration "
            style="margin: 60px 0px 60px; font-size: 18px">
            <q-card>
              <q-card-section>
                <div class="row items-center justify-center">

                  <div class="col-12 col-md q-pa-xl q-mr-xl" data-aos="zoom-in">
                    <q-img src="~assets/report.png" style="max-width: 333px" />
                  </div>

                  <div class="col-12 col-md q-pa-xl q-ml-xl" data-aos="fade-right" style="padding: 0; margin: 0;">
                    <p class="text-subtitle1 text-blue-grey-9" style=" font-family: 'Spartan';
                font-size: 14px;
                font-style: normal;
                font-weight: 400;">
                    <ul>
                      <li>Crystal Reports, owned by SAP, is the default reporting tool for many applications and is
                        included with SAP Business One.</li>
                      <li>Crystal Reports connects to SAP Business One databases on MS-SQL and SAP HANA platforms.</li>
                      <li>Integration from sales to production via bill of materials and MRP module streamlines operations
                        and reduces manual work.</li>
                      <li>Serial and batch management for regulatory compliance.</li>
                      <li>Workflow automation reduces data entry duplication.</li>
                      <li>Comprehensive MRP wizard for customized planning scenarios.</li>

                    </ul>
                    </p>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>



    <!--------------------------------------------------------------------------------------------------->

    <!-- <div class="lt-md">
      <div class="row items-center justify-center bg-grey-2">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/finance_final.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family: system-ui">
            Flow & Money management
          </p>
          <p
            class="text-h4 text-primary"
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
            "
          >
            Accounting and financial
          </p>
          <p
            class="text-subtitle1 text-blue-grey-9"
            style="font-family: system-ui"
          >
            SAP Business One is a full-suite ERP solution for SMEs. It comes
            with a complete set of accounting and financial tools to assist SMEs
            in the management and streamlining of financial operations. SAP
            Business One automates daily accounting tasks and integrates
            financial operations with other business processes in real-time,
            thus improving visibility into cash flows and increasing the speed
            of transactions.
          </p>
        </div>
      </div>

      <div class="row items-center justify-center">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/purchase_final.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-left">
          <p class="text-h6 text-blue-grey-7" style="font-family: system-ui">
            Incoming goods & purchasing
          </p>
          <p
            class="text-h4 text-primary"
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
            "
          >
            Operations and purchase
          </p>
          <p
            class="text-subtitle1 text-blue-grey-9"
            style="font-family: system-ui"
          >
            Every small business needs a systematic approach to managing the
            procurement process, from requesting vendor quotes to creating
            purchase requests to paying vendors. SAP Business One helps manage
            the complete order-to-pay cycle, including receipts, invoices,
            returns, and payments. Integrated reporting tools let you easily
            compare suppliers and prices to negotiate more beneficial deals and
            identify opportunities for cost savings.
          </p>
        </div>
      </div>

      <div class="row items-center justify-center bg-grey-2">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/sales_final.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family: system-ui">
            Sales and Growth
          </p>
          <p
            class="text-h4 text-primary"
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
            "
          >
            Sales and client relationship management
          </p>
          <p
            class="text-subtitle1 text-blue-grey-9"
            style="font-family: system-ui"
          >
            Acquiring new customers is important for business success, but
            maintaining customer relationships is just as crucial, and cannot be
            done in isolation from your business processes. We help you to
            integrate CRM across your business!
          </p>
        </div>
      </div>

      <div class="row items-center justify-center">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/dist.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-left">
          <p class="text-h6 text-blue-grey-7" style="font-family: system-ui">
            Goods management
          </p>
          <p
            class="text-h4 text-primary"
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
            "
          >
            Inventory and distribution
          </p>
          <p
            class="text-subtitle1 text-blue-grey-9"
            style="font-family: system-ui"
          >
            Inventory can be managed using various costing models, maintaining
            item master data and using multiple units of measure and pricing.
            Real-time inventory updates and availability checks are also easily
            managed from within the system, as well as managing standard and
            special pricing, and running reports to reveal the impact of volume,
            cash and customer discounts. Returns, additional expenses and
            multiple currencies are also easily managed, while warehouse and
            accounts integration provide real-time synchronisation of goods
            receipts and inventory warehouse levels. Further automation can be
            provided with scanning solutions, synchronising your stock records
            in SAP Business One.
          </p>
        </div>
      </div>

      <div class="row items-center justify-center bg-grey-2">
        <div
          class="col-12 col-md q-pa-lg q-mx-xl text-center"
          data-aos="zoom-in"
        >
          <q-img src="~assets/report.png" style="max-width: 400px" />
        </div>
        <div class="col-12 col-md q-pa-xl q-mx-xl" data-aos="fade-right">
          <p class="text-h6 text-blue-grey-7" style="font-family: system-ui">
            Analysing & management
          </p>
          <p
            class="text-h4 text-primary"
            style="
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
                sans-serif;
            "
          >
            Reporting and administration
          </p>
          <p
            class="text-subtitle1 text-blue-grey-9"
            style="font-family: system-ui"
          >
            Crystal Reports, owned by SAP, is the default reporting tool for
            many Applications throughout the world and is provided at no cost
            and is included for SAP Business One.
            <br />Firstly, Crystal Reports connects to the SAP Business One
            database on both MS-SQL and SAP HANA platform.
          </p>
        </div>
      </div>
    </div> -->


    <!-- <div class="row q-mx-xl q-my-md">
            <div class="col-12 col-md text-center q-pa-md">
                <p class="text-h6 text-bold text-center text-primary">
                    <q-icon name="verified" size="45px" class="q-pa-md"/>
                    Most Reliable
                </p>
                <p class="text-subtitle1 text-blue-gray-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem aperiam suscipit porro tenetur,
                </p>
            </div>
            <div class="col-12 col-md  text-center q-pa-md">
                <p class="text-h6 text-bold text-center text-primary">
                   <q-icon name="loyalty" size="45px" class="q-pa-md"/>
                    Most Trustable
                </p>
                <p class="text-subtitle1 text-blue-gray-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem aperiam suscipit porro tenetur,
                </p>
            </div>
            <div class="col-12 col-md text-center q-pa-md">
                <p class="text-h6 text-bold text-center text-primary">
                    <q-icon name="how_to_reg" size="45px" class="q-pa-md"/>
                    24x7 Support
                </p>
                <p class="text-subtitle1 text-blue-gray-7">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem aperiam suscipit porro tenetur,
                </p>
            </div>
        </div>  -->

    <!-- <div class="q-mt-md q-mb-xl row items-stretch q-gutter-md justify-evenly">
      <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-right">
        <q-card-section class="text-center">
          <q-icon
            name="verified"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section>
          Integration from sales directly to production using bill of materials,
          which drives purchasing demand using the MRP module, saving time and
          reducing manual administration
        </q-card-section>
      </q-card>

      <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-right">
        <q-card-section class="text-center">
          <q-icon
            name="fas fa-chart-bar"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section>
          Fully integrated serial & batch management enables compliance with
          different regulatory bodies
        </q-card-section>
      </q-card>

      <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-left">
        <q-card-section class="text-center">
          <q-icon
            name="fas fa-calculator "
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section>
          Workflow automation reducing duplication of data-entry across multiple
          teams and departments
        </q-card-section>
      </q-card>

      <q-card class="my-cardx q-my-md text-blue-grey-9" data-aos="fade-left">
        <q-card-section class="text-center">
          <q-icon
            name="fas fa-cubes"
            size="45px"
            class="q-pa-sm"
            color="secondary"
          />
        </q-card-section>
        <q-card-section>
          Comprehensive MRP wizard enables customisation of planning scenarios,
          based on lead-time, warehouse, product or any other variable you might
          have
        </q-card-section>
      </q-card>
    </div> -->


    <q-parallax class="bg-brand gt-sm" style="height: 750px;">
      <div class="gt-sm">
        <div class="row items-center justify-between text-white" style="min-width:1328px ;">
          <!-- Your existing content -->

          <div class="column q-pa-md q-gutter-sm">
            <div class="B1_hana--img-text">
              <img src="../assets/B1_Hana3icon.svg" />
              <div>SAP Channel Partner</div>
            </div>
            <div class="">
              <h5 style="margin-bottom: 10px !important;">Most Trusted Enterprise</h5>
              <h5 style="margin-top: 5px !important;">Resource Planning in the World</h5>
            </div>
            <div class="q-gutter-sm" style="margin: 0 !important;">
              <q-btn outline color="white" label="BOOK A DEMO" class="text-white" style="width: 173px; height: 44px;" />
            </div>
          </div>


          <div class="column q-pa-md q-gutter-sm">
            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1">Become Agile</span></p>
              <p> Pervasive Analytics, Interactive Analysis and Analytical Portal</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1">Additional integration
                  options</span></p>
              <p> ODATA and Service Layer</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1">Added functionality</span></p>
              <p>Intelligent Forecasting, Advanced Available to Promise, Delivery Schedule Management</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1">Modern HTML cockpit
                  interface</span></p>
              <p> Pervasive Analytics, Interactive Analysis and Analytical Portal</p>
            </div>
          </div>

        </div>
      </div>
      <!---------------------------------------------Mobile ---------------------------------------------------->
    </q-parallax>

    <q-parallax class="bg-brand lt-md" style="height: 1000px;">
      <div class="lt-md q-ml-sm q-mr-sm">
        <div class="column  text-white">
          <!-- Your existing content -->

          <div class="column q-pa-md q-gutter-sm">
            <div class="B1_hana--img-text">
              <img src="../assets/B1_Hana3icon.svg" />
              <div class="text-weight-bolder">SAP Channel Partner</div>
            </div>
            <div class="">
              <p class="text-h6 q-mt-xl" style="margin-bottom: 10px !important;">Most Trusted Enterprise
                Resource Planning in the World</p>
            </div>

          </div>


          <div class="column q-pa-md q-gutter-sm q-mt-xl">
            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1 q-ml-sm">Become Agile</span>
              </p>
              <p> Pervasive Analytics, Interactive Analysis and<br> Analytical Portal</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1 q-ml-sm">Additional integration
                  options</span></p>
              <p> ODATA and Service Layer</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1 q-ml-sm">Added
                  functionality</span></p>
              <p>Intelligent Forecasting, Advanced Available to<br> Promise, Delivery Schedule Management</p>
            </div>

            <div>
              <p><i class="fas fa-check"></i> <span class="text-weight-bold text-subtitle1 q-ml-sm">Modern HTML cockpit
                  interface</span></p>
              <p> Pervasive Analytics, Interactive Analysis and<br> Analytical Portal</p>
            </div>

            <div class="q-gutter-sm" style="margin-top: 20px !important; margin-left: 0;">
              <q-btn outline color="white" label="BOOK A DEMO" class="text-white" style="width: 100%; height: 44px;" />
            </div>
          </div>

        </div>
      </div>
    </q-parallax>
  </div>
</template>

<script>
import meta from "../utils/meta.js";

export default {
  data() {
    return {

      expandIcon: 'add', // Use 'add' icon for plus
      collapseIcon: 'remove', // Use a custom Vue component for minus icon

      mobile: false,
      title: "SAP Business One",
      metaTags: {
        description:
          " Quantum IT solution is Gujarat leading software development firm across the India. We offer integrated solution(s) in SAP, Machine learning, Python, Blockchain",
        title: "Quantum | SAP Business One",
        keywords:
          "SAP Solution,SAP Implementation,SAP Channel Partner, SAP Solution in India, SAP Business One, SAP S/4 HANA, IT Solution",
      },
    };
  },
  meta,
  created() {
    if (this.$q.screen.lt.sm) {
      this.mobile = false;
    } else {
      this.mobile = true;
    }
  },
};
</script>

<style scoped>
.q-expansion-item.active .q-expansion-item-header-icon::before {
  content: url('~assets/minus.svg') !important;
  /* Set your custom minus icon */
}

.my-cardx {
  width: 100%;
  max-width: 250px;
  border-radius: 25px;
  border-top-color: #3663a8;
  border-top-width: 5px;
  border-top-style: solid;
  border-bottom-color: #ff8b0f;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.my-cardx:hover {
  box-shadow: 0 10px 13px -6px rgba(54, 99, 168, 0.2),
    0 20px 31px 3px rgba(54, 99, 168, 0.14),
    0 8px 38px 7px rgba(54, 99, 168, 0.12) !important;

  border-top-style: solid;
  border-top-color: #ff8b0f;
  border-top-width: 5px;
  border-bottom-color: #3663a8;
  border-bottom-width: 5px;
  border-bottom-style: solid;
}

.background {
  background: linear-gradient(132deg, #380036, #0cbaba);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  position: relative;
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* position the div in center */
}

.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;
}

.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

.Accordoin-header-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-brand {
  background-color: #101729;
}

.B1_hana--img-text {
  display: flex;
  gap: 15px;
  align-items: end;
}

.my-h5-container h5:first-child {
  margin-bottom: 0.1rem;
}
</style>
