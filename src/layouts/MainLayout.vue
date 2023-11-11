<template>

  <q-layout view="lHh Lpr lFf">
    <!-- header-->
    <q-header
      reveal
      class="animated slideInDown"
      v-bind:class="{ 'bg-transparent': transp, 'bg-accent': color }"
    >

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&display=swap" rel="stylesheet">

      <q-toolbar style="background-color: #FFF;">
            <!-- Logo -->
        <q-toolbar-title class="gt-sm q-mx-xl" @click="$router.push('/')">
          <q-img src="~/assets/qit.svg" style="max-width:150px; margin-top: 7px; margin-bottom: 20px;" />
        </q-toolbar-title>
         <!-- Logo Mobile Version -->
        <q-toolbar-title class="lt-md" @click="$router.push('/')">
          <q-img src="~/assets/qit.svg" style="max-width:150px; margin-top: 7px; margin-bottom: 20px;" />
        </q-toolbar-title>
         <q-no-ssr>
          <!-- NavBar -->
        <div class="gt-sm navbar" style="font-family:'League Spartan', sans-serif; background-color: #FFF;
        ">

          <router-link class="text-subtitle1" style="color:#121619;" to="/">Home</router-link>
          <div class="dropdown" style="color:#121619;">
            <button class="dropbtn text-subtitle1" style="color:#121619;">
              Business Solution
              <i class="fa fa-angle-down" style="color:#121619;" aria-hidden="true"></i>
            </button>
            <div class="dropdown-content">
              <div class="dropright">
                <div>
                  <button class="drbtn text-subtitle2" >
                    SAP Solution
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="dropright-content">
                  <router-link
                    to="/sap-business-one-plus-hana"
                    class="text-subtitle2 text-dark"
                    >SAP B1 + Hana </router-link
                  >
                  <router-link
                    class="text-subtitle2 text-dark"
                    to="/sap-business-one-on-cloud"
                    >SAP B1 Cloud</router-link
                  >
                  <router-link
                    to="/sap-business-one-on-hana"
                    class="text-subtitle2 text-dark"
                    >SAP S/4 Hana + Cloud</router-link
                  >
                </div>
              </div>
              <div class="dropright">
                <div>
                  <button class="drbtn text-subtitle2">
                    IT Solutions
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="dropright-content">
                  <router-link
                    to="/explore-it-solution"
                    class="text-subtitle2 text-dark"
                    >Explore Solutions</router-link
                  >
                  <router-link
                    to="/web-development"
                    class="text-subtitle2 text-dark"
                    >Web Development</router-link
                  >
                  <router-link
                    to="/mobile-app-development"
                    class="text-subtitle2 text-dark"
                    >Mobile Application</router-link
                  >
                  <router-link
                    to="/ui-ux-design"
                    class="text-subtitle2 text-dark"
                    >UI/ UX Design </router-link
                  >
                  <router-link
                    to="/erp-customization"
                    class="text-subtitle2 text-dark"
                    >Customise ERP
                  </router-link>
                  <router-link
                    to="/crm-development"
                    class="text-subtitle2 text-dark"
                    >CRM Development
                  </router-link>
                </div>
              </div>
             
            </div>

          </div>
          <div class="dropdown"  style="color:#121619;">
            <button class="dropbtn text-subtitle1"  style="color:#121619;">
              Products <i class="fa fa-angle-down" aria-hidden="true"  style="color:#121619;"></i>
            </button>
            <div class="dropdown-content"  style="color:#121619;">
              <router-link
                to="/einvoice-ewaybill-solution"
                class="text-subtitle2 text-dark"
                >E-Invoice & E-Way Bill Solution</router-link
              >
              <router-link
                to="/digital-signature"
                class="text-subtitle2 text-dark"
                >Digital Signature</router-link
              >
              <router-link
                to="/quality-control-system"
                class="text-subtitle2 text-dark"
                >Quality Control System</router-link
              >
            </div>
          </div>
          <div class="dropdown"  style="color:#121619;">
            <button class="dropbtn text-subtitle1"  style="color:#121619;">
              About Us <i class="fa fa-angle-down" aria-hidden="true"  style="color:#121619;"></i>
            </button>
            <div class="dropdown-content">
              <router-link to="/about-us" class="text-subtitle2 text-dark"
                >About Us</router-link
              >
              <router-link
                to="/career-at-quantum"
                class="text-subtitle2 text-dark"
                >Career</router-link
              >
            </div>
          </div>
          <router-link to="/contact-us" style="color:#121619; font-family:'League Spartan', sans-serif;" class="text-subtitle1"
            >Contact Us</router-link>
      

           <!-- Book a demo button -->
           <div class="dropdown" style="padding: 10px 19px; color:#121619; font-family:'League Spartan', sans-serif;">
              <q-btn
                push
                outline
                color="dark"
                label="Book a Demo"
                @click="redirectToScheduler"
              />
            </div>
        </div>
         </q-no-ssr>

         <div class="lt-md">
          <q-btn
            flat
            color="white"
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- drawer-->
    <div class="lt-md">
      <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
        <div class="text-center text-secondary text-subtitle q-pa-md">
          Navigation
        </div>

        <q-list bordered class="rounded-borders">
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>Home</q-item-section>
          </q-item>

          <q-expansion-item
            expand-separator
            icon="web"
            label="Business Solution"
          >
            <q-list bordered>
              <q-expansion-item expand-separator label="SAP Solution">
                <q-list bordered>
                  <q-item clickable v-ripple to="sap-business-one-plus-hana">
                    <q-item-section>SAP B1 + Hana</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="sap-business-one-on-cloud">
                    <q-item-section>SAP B1 Cloud</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/sap-business-one-on-hana">
                    <q-item-section>SAP S/4 Hana + Cloud</q-item-section>
                  </q-item>

                </q-list>
              </q-expansion-item>

              <q-expansion-item expand-separator label="IT Solutions">
                <q-list bordered>
                  <q-item clickable v-ripple to="/explore-it-solution">
                    <q-item-section>Explore Solutions</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/web-development">
                    <q-item-section>Web Development</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/mobile-app-development">
                    <q-item-section>Mobile Application</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/ui-ux-design">
                    <q-item-section>UI/ UX Design</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/erp-customization">
                    <q-item-section
                      >Customise ERP</q-item-section
                    >
                  </q-item>
                  <q-item clickable v-ripple to="/crm-development">
                    <q-item-section
                      >CRM Development</q-item-section
                    >
                  </q-item>
                </q-list>
              </q-expansion-item>

              <q-expansion-item
                expand-separator
                label="IT Counsulting & Trainingn"
              >
                <q-list bordered>
                  <q-item clickable v-ripple to="/sap-traning">
                    <q-item-section>SAP Training</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/machine-learning-traning">
                    <q-item-section>Machine Learning Training</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/python-traning">
                    <q-item-section>Python Training</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple to="/placement-service">
                    <q-item-section>Placement Service</q-item-section>
                  </q-item>
                </q-list>
              </q-expansion-item>
              
            </q-list>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="favorite" label="Products">
            <q-list bordered>
              <q-list bordered>
                <q-item clickable v-ripple to="/einvoice-ewaybill-solution">
                  <q-item-section
                    >E-Invoice & E-Way Bill Solution</q-item-section
                  >
                </q-item>

                <q-item clickable v-ripple to="/digital-signature">
                  <q-item-section>Digital Signature</q-item-section>
                </q-item>

                <q-item clickable v-ripple to="/quality-control-system">
                  <q-item-section>Quality Control System</q-item-section>
                </q-item>
              </q-list>
            </q-list>
          </q-expansion-item>

          <q-expansion-item expand-separator icon="info" label="About Us">
            <q-list bordered>
              <q-list bordered>
                <q-item clickable v-ripple to="/about-us">
                  <q-item-section
                    >About Us</q-item-section
                  >
                </q-item>

                <q-item clickable v-ripple to="/career-at-quantum">
                  <q-item-section>Career</q-item-section>
                </q-item>
              </q-list>
            </q-list>
          </q-expansion-item>

          <q-item clickable v-ripple to="/contact-us">
            <q-item-section avatar>
              <q-icon name="supervisor_account" />
            </q-item-section>
            <q-item-section>Contact Us</q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
    </div>
    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="300"
      >
        <router-view />
      </transition>
    </q-page-container>

    <!------------------------Desktop Version sub footer------------------------------------------>

    <div class="flex flex-center column gt-xs" style="text-align: justify; font-family: 'League Spartan', sans-serif; background-color: #F9F9F9; ">
      <div class="q-mt-md row q-gutter-md justify-evenly" style="color: #21272A; " >

        <div class="q-ma-xl">
          <p class="text-h6">Navigation Links</p>
          <q-btn flat color="black" label="About US" to="/about-us" />
          <br />
          <q-btn
            flat
            color="black"
            label="Products"
            to="sap-business-one-addon"
          />
          <br />
          <q-btn
            flat
            color="black"
            label="Business Solutions"
            to="/sap-business-one-plus-hana"
          />
          <br />
          <q-btn flat color="black" label="Career" to="/career-at-quantum" />
          <div style="max-width: 300px; margin-top: 5px">
       
          <q-btn
            round
            type="a"
            href="https://www.facebook.com/Quantum-IT-Solution-113849966746159/"
            icon="fab fa-facebook"
            class="bg-white q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://wa.link/gtl1nh"
            icon="fab fa-whatsapp"
            class="bg-white q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://www.linkedin.com/company/quantum-it-solution/"
            icon="fab fa-linkedin"
            class="bg-white q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://calendly.com/advantco_/discovery-call?month=2023-02&date=2023-02-09"
            icon="fa fa-calendar"
            class="bg-white q-mx-sm"
            target="_blank"
          />
        </div>
        </div>
 
        <div class="q-ma-xl">
          <p class="text-h6">Contact US</p>
          <p class="text-subtitle">
            Shop No :370 and 350-351. The Galleria, <br />Near Sanjeev Kumar Auditorium,
            <br />Opposite New RTO, Pal Gam,<br />
            Surat, Gujarat 395009
          </p>
          <p class="text-subtitle">
            <q-icon
              name="email"
              style="font-size: 1.5rem"
              color="black"
              class="q-mx-md"
            />
            hr@qitsolution.co.in
          </p>
          <p class="text-subtitle">
            <q-icon
              name="email"
              style="font-size: 1.5rem"
              color="black"
              class="q-mx-md"
            />
            keyur@qitsolution.co.in
          </p>
          <p class="text-subtitle">
            <q-icon
              name="room"
              style="font-size: 1.5rem"
              color="black"
              class="q-mx-md"
            />
            <q-btn
              flat
              color="black"
              dense
              label="Get Direction"
              to="/contact-us"
            />
          </p>
        </div>

        <div class="q-ma-xl">
          <p class="text-h6">Important Links</p>
          <q-btn flat color="black" label="SAP Business B1 Partner in Surat" to="/sap-b1-surat" />
            <br/>
          <q-btn flat color="black" label="SAP Business One Partner in Vadodara" to="/sap-vadodara" />
          <br />
          <q-btn
            flat
            color="black"
            label="SAP Business One Partner in Ahmedabad"
            to="/sap-ahmedabad"
          />
          <br />
          <q-btn
            flat
            color="black"
            label="SAP Business One Partner in Mumbai"
            to="/sap-mumbai"
          />
          <br/>
          <q-btn flat color="black" label="SAP Business B1 Partner in Bangalore" to="/sap-b1-bangalore" />

        </div>


      </div>
    </div>
<!------------------------Mobile Version sub footer------------------------------------------>
    <div class="row bg-grey-10 lt-sm text-white" style="text-align: justify; font-family: 'League Spartan', sans-serif;">
      <div class="col-12 col-md">
        <div class="q-mx-xl q-my-lg" style="width: 300px; text-align: justify; font-family: 'League Spartan', sans-serif">
          <p class="text-h6">Subscribe To Newsletter</p>
          <div class="q-pt-sm text-white" style="max-width: 400px">
            <q-form
              @submit="newsletterFun"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                dark
                dense
                filled
                v-model="newsletter"
                label="Your Email *"
                type="email"
                hint="Email"
              />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </div>
          <div style="max-width: 400px; margin-top: 20px">
          <p class="text-h6">Social Handles</p>
          <q-btn
            round
            type="a"
            href="https://www.facebook.com/Quantum-IT-Solution-113849966746159/"
            icon="fab fa-facebook"
            class="bg-primary q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://wa.link/gtl1nh"
            icon="fab fa-whatsapp"
            class="bg-primary q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://www.linkedin.com/company/quantum-it-solution/"
            icon="fab fa-linkedin"
            class="bg-primary q-mx-sm"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="https://calendly.com/advantco_/discovery-call?month=2023-02&date=2023-02-09"
            icon="fa fa-calendar"
            class="bg-primary q-mx-sm"
            target="_blank"

          />
        </div>
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-mx-xl q-my-md">
          <p class="text-h6">Navigation Links</p>
          <q-btn flat color="white" label="About US" to="/about-us" />
          <br />
          <q-btn
            flat
            color="white"
            label="Products"
            to="sap-business-one-addon"
          />
          <br />
          <q-btn
            flat
            color="white"
            label="Business Solutions"
            to="/sap-business-one"
          />
          <br />
          <q-btn flat color="white" label="Career" to="/career-at-quantum" />
        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-mx-xl q-my-md">
          <p class="text-h6">Important Links</p>
          <q-btn flat color="white" label="SAP Business B1 Partner in Surat" to="/sap-b1-surat" />

          <br/>

          <q-btn flat color="white" label="SAP Business One Partner in Vadodara" to="/sap-vadodara" />
          <br />
          <q-btn
            flat
            color="white"
            label="SAP Business One Partner in Ahmedabad"
            to="/sap-ahmedabad"
          />
          <br />
          <q-btn
            flat
            color="white"
            label="SAP Business One Partner in Mumbai"
            to="/sap-mumbai"
          />
          <br/>
          <q-btn flat color="white" label="SAP Business B1 Partner in Bangalore" to="/sap-b1-bangalore" />

        </div>
      </div>

      <div class="col-12 col-md">
        <div class="q-mx-xl q-my-md">
          <p class="text-h6">Contact US</p>
          <p class="text-subtitle">
            Shop No : 370 and 350-351. The Galleria, <br />Near Sanjeev Kumar Auditorium,
            <br />Opposite New RTO, Pal Gam,<br />
            Surat, Gujarat 395009
          </p>
          <p class="text-subtitle">
            <q-icon
              name="email"
              style="font-size: 1.5rem"
              color="primary"
              class="q-mx-md"
            />
            hr@qitsolution.co.in
          </p>
          <p class="text-subtitle">
            <q-icon
              name="email"
              style="font-size: 1.5rem"
              color="primary"
              class="q-mx-md"
            />
            Keyur@qitsolution.co.in
          </p>
          <p class="text-subtitle">
            <q-icon
              name="room"
              style="font-size: 1.5rem"
              color="primary"
              class="q-mx-md"
            />
            <q-btn
              flat
              color="black"
              dense
              label="Get Direction"
              to="/contact-us"
            />
          </p>
        </div>
      </div>
    </div>
    <!------------------------sub footer end------------------------------------------>

    <!--footer-->
    <q-toolbar elevated class="" style="text-align: justify; font-family: 'League Spartan', sans-serif; color: #21272A; background-color: #FFFFFF;">
      <q-toolbar-title class="absolute-center text-body2">
        ©{{ new Date().getFullYear() }} Quantum IT Solution, All Right Reserved.
      </q-toolbar-title>
    </q-toolbar>

    <q-page-sticky
      position="bottom-right"
      :offset="fabPos"
      class="animated backInRight"
    >
      <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">
        <strong>Click To Action</strong>
      </q-tooltip>

      <q-fab
        icon="add"
        direction="up"
        color="secondary"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action
          color="primary"
          icon="mail"
          :disable="draggingFab"
          @click="dilouge()"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[10, 10]"
          >
            <strong>Book Your Free Demo</strong>
          </q-tooltip>
        </q-fab-action>
        <q-fab-action
          color="green-14"
          icon="fab fa-whatsapp"
          :disable="draggingFab"
          type="a"
          href="https://wa.link/gtl1nh"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[10, 10]"
          >
            <strong>Connect On whatsapp</strong>
          </q-tooltip>
        </q-fab-action>
        <q-fab-action
          color="primary"
          icon="fa fa-calendar"
          :disable="draggingFab"
          type="a"
          href="https://calendly.com/advantco_/discovery-call?month=2023-02&date=2023-02-09"
          target="_blank"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[10, 10]"
          >
            <strong>Schedule a Meeting</strong>
          </q-tooltip>
        </q-fab-action>
      </q-fab>
    </q-page-sticky>

    <q-dialog v-model="prompt" persistent>
      <q-card class="card" style="min-width: 300px">
        <q-card-section>
          <div class="text-h6" style="text-align: center">
            Book Your Demo Now
          </div>
        </q-card-section>
        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <div>
              <q-input
                filled
                color="secondary"
                v-model="name"
                label="Company Name"
                hint="Organization Name"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <br />
              <q-input
                filled
                color="secondary"
                v-model="email"
                label="Email Address"
                hint="Your Email Address"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
              <br />
              <q-input
                v-model="date"
                filled
                type="date"
                hint="Book Your Date"
                color="secondary"
              />
            </div>
            <div>
              <q-btn label="Submit" type="submit" color="primary" />
              <q-btn
                label="cancel"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
              />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!------------------------------------ end------------------------------------------>
  </q-layout>
</template>

<script>
import meta from "../utils/meta.js";
import { debounce } from "quasar";
import firebase from "firebase";
const db = firebase.firestore();
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      alert: false,
      confirm: false,
      prompt: false,
      address: null,
      name: null,
      email: null,
      date: null,
      newsletter: null,
      status: true,
      transp: true,
      color: false,
      fabPos: [18, 18],
      draggingFab: false,
      menu: false,
      menuOver: false,
      listOver: false,
      sublist: false,
      submenu: false,
      metaTags: {
        description: null,
        title: null,
        keywords: null,
      },
    };
  },
  meta,
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
    //window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    menuOver(val) {
      this.debounceFunc();
    },
    listOver(val) {
      this.debounceFunc();
    },
  },
  methods: {
    newsletterFun() {
      if (this.newsletter != null) {
        db.collection("newsletter")
          .add({
            email: this.newsletter,
          })
          .then(() => {
            this.$q.notify({
              color: "primary",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });
            this.newsletter = null;
          })
          .catch((error) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Try Again after some time! sorry",
            });
          });
      }
    },
    debounceFunc: debounce(function () {
      this.checkMenu();
    }, 300),
    onItemClick() {
    },
    checkMenu() {
      if (this.menuOver || this.listOver) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 100) {
        (this.color = true), (this.transp = false);
      } else {
        (this.color = false), (this.transp = true);
      }
    },
    dilouge() {
      this.prompt = true;
    },
    onSubmit() {
      if (name != null) {
        db.collection("enquiry")
          .add({
            email: this.email,
            name: this.name,
            date: this.date,
            status: this.status,
          })
          .then(() => {
            this.$q.notify({
              color: "primary",
              textColor: "white",
              icon: "cloud_done",
              message: "Submitted",
            });
            this.prompt = false;
            this.onReset();
          })
          .catch((error) => {
            this.$q.notify({
              color: "red-5",
              textColor: "white",
              icon: "warning",
              message: "Try Again after some time! sorry",
            });
          });
      }
    },
    onReset() {
      this.name = null;
      this.date = null;
      this.email = null;
      this.prompt = false;
    },
    moveFab(ev) {
      this.draggingFab = ev.isFirst !== true && ev.isFinal !== true;
      this.fabPos = [this.fabPos[0] - ev.delta.x, this.fabPos[1] - ev.delta.y];
    },
  },
};
</script>

<style lang="stylus" scoped>
.q-page-container {
  padding-top: 0 !important;
}
.animated {
  animation-duration: 2s;
  animation-fill-mode: both;
}
.q-btn:hover {
  background-color: rgba(255, 139, 15, 0.3);
}
.navbar {
  overflow: hidden;
}
.navbar a {
  float: left;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  border-radius: 5px;
}
/* -----Dropdown menu----- */
.dropdown {
  float: left;
  overflow: hidden;
}
.dropdown .dropbtn {
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  min-width: 230px;
}
.dropdown-content a {
  float: none;
  text-decoration: none;
  display: block;
  text-align: left;
  color: #1D1D1D;
}
/* -----Dropright menu----- */
.dropdown-content .dropright {
  overflow: hidden;
  border-radius: 5px;
}
.dropright div {
  /* to show drop-right menu exactly to the right */
  /* if this is removed, the menu will be shown to the bottom right of the button */
  float: left;
  width: 100%;
  border-radius: 5px;
}
.dropright .drbtn {
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  padding: 14px 16px;
  background-color: inherit;
  margin: 0;
  color: #1D1D1D;
}
.dropright-content {
  display: none;
  position: absolute;
  margin: 0 195px;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
/* -----Effects for Hovering over----- */
.navbar a:hover, .dropdown:hover .dropbtn {
  color: #ff8b0f;
}
.dropdown-content a:hover, .dropright:hover .drbtn {
  background-color: #ddd;
  color: #ff8b0f;
}
.dropdown:hover .dropdown-content {
  display: block;
  color: #ff8b0f;
}
.dropright:hover .dropright-content {
  display: block;
  color: #ff8b0f;
}
.dropright-content i {
  float: right;
}
button {
  cursor: pointer;
}
</style>
