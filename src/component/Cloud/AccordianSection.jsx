
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import devops from '../../images/cloud/devops.png'
import enlight_kubernet from '../../images/cloud/eNlight-kubernetes-service.png'
import network from '../../images/cloud/network.jpg'
import network_diagram from '../../images/cloud/Network-Diagram.jpg'
import eNlight_Business_Continuity_Structure from '../../images/cloud/eNlight-Business-Continuity-Structure.png'
import PostgreeSQL_database from '../../images/cloud/PostgreeSQL-database.png'
import Oracle_Databases from '../../images/cloud/Oracle-Databases.png'
import MS_SQL_database from '../../images/cloud/MS-SQL-database.png'
import SQL_and_NoSQL_DB_as_a_Service from '../../images/cloud/SQL-and-NoSQL-DB-as-a-Service.png'
import NoSQL_DBaaS from '../../images/cloud/NoSQL-DBaaS.png'
import backup_restore from '../../images/cloud/backup&restore.png'
import ecos from '../../images/cloud/ecos.png'
import service_level_agreement from '../../images/cloud/service-level-agreement.png'
import HDFS_HA_Architecture from '../../images/cloud/HDFS-HA-Architecture.png'
import data_flow from '../../images/cloud/data-flow.png'
import user_pov from '../../images/cloud/User-POV.png'
import entity_sequence_diagram from '../../images/cloud/entity-sequence-diagram.png'
import HDFS_Storage from '../../images/cloud/HDFS-Storage.png'
import High_Level_Node_Architecture from '../../images/cloud/High-Level-Node-Architecture.png'
import Network_Architecture from '../../images/cloud/Network-Architecture.png'
import Login_Page from '../../images/cloud/Login-Page.png'
import Home_Page_SSP from '../../images/cloud/Home-Page-SSP.png'
import Data_Sources from '../../images/cloud/Data-Sources.png'
import Dashboard_of_Services from '../../images/cloud/Dashboard-of-Services.png'
import Data_Ingestion_SSP_API from '../../images/cloud/Data-Ingestion-SSP-API.png'
import Monitoring_Page_of_Datalake_Services from '../../images/cloud/Monitoring-Page-of-Datalake-Services.png'
import ESDS_Rubiscape from '../../images/cloud/ESDS-Rubiscape.png'
import RubiWise from '../../images/cloud/RubiWise.png'
import Platform_Architecture from '../../images/cloud/Platform-Architecture.jpg'
import Dataset_Connection from '../../images/cloud/Dataset-Connection.png'
import osd from '../../images/cloud/osd.png'
import Serverless_platform from '../../images/cloud/Serverless-platform.png'
import Bulk_Emails_Services from '../../images/cloud/Bulk-Emails-Services.png'
import regional_sms from '../../images/cloud/regional-sms.png'
import key_plantform from '../../images/cloud/key-plantform.png'
import iot from '../../images/cloud/iot.png'


function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordianSection() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="complain-accordian">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(1)}>Security</AccordionHeader>
        <AccordionBody className="accordina-body">
        <p><strong>ESDS Cloud infrastructure comes with the 7 Layers of Security </strong></p>
            <p>We provide Layer 4 & 7 Firewalls that filter traffic based on IP addresses and ports while enhancing security through application-level inspection.</p>
 
            <p>Our Layer 4 & 7 Load Balancers ensure efficient distribution of network traffic, optimizing application performance at both network and application layers.</p>
             
            <p>Utilizing HIDS/NIDS, we monitor individual system activities and network traffic, detecting and preventing security threats in real-time.</p>
             
            <p>Rights Management is implemented to control user access, ensuring proper authorization and preventing unauthorized actions on our systems.</p>
             
            <p>For data protection, we implement Data Privacy measures to safeguard sensitive information and employ Data Encryption to secure data during transmission and storage.</p>
             
            <p>Our commitment to industry standards and regulations is demonstrated through Certifications & Compliance, showcasing our adherence to best practices and security requirements.</p>
             
            <p>Authentication & Authorization processes verify user identities and grant access based on authenticated roles, ensuring secure system interactions.</p>
             
            <p>To maintain transparency and accountability, our systems undergo Auditing & Accounting, providing a comprehensive audit trail for analysis and compliance verification.</p>
                        
            
            
            
            <p><strong>The ESDS eNlight cloud is based on three essential security architecture components.</strong></p>
            <p><strong>Confidentially</strong> - Prevent unauthorized access to data to protect and safeguard it.</p>
            <p><strong>Integrity</strong> - Prevent unauthorized alterations to ensure data integrity and correctness.</p>
            <p><strong>Availability </strong> - Make sure authorized users can access the data by using redundancy and resilience.</p>
            <p>Although security is required, advanced security is voluntary. In order to earn your complete trust, we have implemented advanced and managed security through a multi-layered security environment that is entirely managed and maintained in our datacenter.</p>
            <p>eNlight 360°, the Data Center Infrastructure Management (DCIM) tool by ESDS, provides a single sign-on module as IAM, which takes care of Identity and Access Management, User management and encryption keys, and session sharing with add-on token-based security.</p>
            <p><strong>Web Application Firewall and DDoS Prevention </strong></p>
            <ul>
              <li class="text-justify">The ESDS enterprise-class DDoS defense network assures maximum website security. ESDS eNlight WAF is a sophisticated Cloud Hosted Web Application Firewall that allows you to filter incoming and outgoing web traffic and block OWASP Top10 threats, including injection and cross-site scripting.</li>
              <li class="text-justify">The eNlight WAF solution enables users to design unique rules to prevent web attacks. When the anomaly threshold is reached, the eNlight WAF automatically blocks unauthorized traffic and notifies the attacker with a customized response.</li>
              <li class="text-justify">The ESDS eNlight WAF includes intrusion detection algorithms that let the administrator identify risky behavior and create effective filtering rules. Along with offering protection from dangerous domains, malware-hosting domains, domains that appear legitimate but are actually corrupted and may host botnets, etc., it also provides help for intrusion prevention.</li>
            </ul>
            <p><strong>Automated Patch Management and Cyber threat Prevention</strong></p>
            <ul>
              <li class="text-justify">ESDS goes beyond patch deployment with enhanced remediation capabilities. It offers repair asset misconfigurations, patch operating systems and third-party apps, and deploy bespoke software to reduce attack risk and achieve compliance. This comprehensive, all-inclusive technique reduces the cost and complexity of patching vulnerabilities. ESDS' Automated Patch Management automatically updates laptops, desktops, servers, and remote devices. It performs admirably and is simple to use.</li>
              <li class="text-justify">Our cyber security experts at ESDS deal with several cyber threats. The Cyber Security Team actively acquires threat intelligence data 24 hours a day, seven days a week. In addition, we use cutting-edge techniques to respond to incidents faster.</li>
              <li class="text-justify">Machine Learning and behavior analysis are used to provide alerts to mitigate hazards. ESDS Cyber Security Champions are committed to cyber security by offering indigenous solutions supported by over 19 years of experience. Complete data security is provided by securely hosting data in Indian data centers. </li>
              <li class="text-justify">You get the highest level of security with the ESDS enterprise-class DDoS protection network. </li>
            </ul>
            <p><strong>VTMScan - A complete web-application scanning tool</strong></p>
            <ul>
              <li class="text-justify">All online threats and cyberattacks, including the OWASP Top-10 Vulnerabilities, SQL Injections, and Cross-Site Scripting, are scanned for and detected by VTMScan. Through a thorough evaluation of website security, VTMScan users receive total protection for their web assets. Additionally, when a threat is imminent, VTMScan provides a comprehensive scanning solution with immediate alerts.</li>
              <li class="text-justify">You can guarantee the highest level of security with the ESDS enterprise-class DDoS protection network. </li>
            </ul>
            <p><strong>CAPACITIES AND FEATURES</strong></p>
            <ul>
              <li>IT Security Services</li>
              <li>Web services signatures</li>
              <li>Malware detection</li>
              <li>Protocol validation</li>
              <li>Brute-force protection</li>
              <li>Cookie signing and encryption</li>
              <li>Threat scoring and weighting</li>
              <li>Syntax-based SQLi detection</li>
              <li>HTTP header security</li>
            </ul>
            <p><strong>Application Delivery</strong></p>
            <ul>
              <li>Optional CDN</li>
              <li>URL rewriting</li>
              <li>Content routing</li>
              <li>HTTPS/SSL offloading</li>
              <li>HTTP compression</li>
              <li>Caching</li>
            </ul>
            <p><strong>Authentication</strong></p>
            <ul>
              <li>Active and passive authentication</li>
              <li>Site publishing and SSO</li>
              <li>LDAP, RADIUS, and SAML support</li>
              <li>SSL client certificate support</li>
              <li>CAPTCHA and Real Browser Enforcement (RBE)</li>
            </ul>
            <p><strong>Management and Reporting</strong></p>
            <ul>
              <li>Web user interface</li>
              <li>Graphical analysis and reporting tools</li>
              <li>Centralized logging and reporting</li>
              <li>User/device tracking</li>
              <li>Real-time dashboards</li>
              <li>Bot dashboard</li>
              <li>OWASP Top 10 attack categorization</li>
              <li>Geo IP analytics</li>
            </ul>
            <p>All types of online threats and cyberattacks, including the OWASP Top-10 Vulnerabilities, SQL Injections, and Cross-Site Scripting, are scanned for and detected by VTMScan. Through a thorough evaluation of the website security, VTMScan users receive total protection for their web assets. When a threat is imminent, VTMScan provides a comprehensive scanning solution with immediate alerts.</p>
			  <p>CSP must provide native service for security like Identity & access management, manage user access and encryption keys, Single sign on service for cloud and a Centralize Governance and Compliance Management</p>
			  
			  <p>We provide detailed logs of all user activity within a CSP account, including API caller identity, timestamps, source IP addresses, request parameters, and response elements, to support security analysis, resource change tracking, and compliance auditing.</p>
              <p> Our fully managed service in India helps identify potentially fraudulent online activities, such as online payment fraud and the creation of fake accounts, ensuring robust protection for your business.</p>
              
              <strong>HSM </strong>
              <p>HSM as a service are being provided as managed shared infrastructure-based or dedicated infrastructure-based model, ensuring that dedicated HSM is exclusively for each subscription where Data encryption is default, with flexible options for managing encryption keys and data access. VM’s are also provided that ensure encryption of data in transit, at rest (using CMEK and CSEK), and while in use.</p>
			  
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(2)}>M & G</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p>Customers can use eNlight Cloud to develop templates of their necessary configuration. The Add Template option allows users to add templates. User-specific templates are only visible to that user or administrator. Users can upload a template that meets their needs and use it to generate VMs.</p>
          <p>A project is given to each user. Both of the projects include a variety of eNlight 360° devices. Users can assign their projects to different groups and execute CRUD actions. This includes mass deleting/enabling/disabling project activities, adding or removing members from projects with various roles, etc. </p>
          <p>eNlight 360° keeps track of a device's entire resource usage, including RAM, CPU, and other components. The user can add a custom threshold for each of the many Health check metrics, such as RAM and CPU. As a result, the user is informed of future actions if the parameter's usage in the system exceeds the predetermined threshold. </p>
          <p>eNlight cloud Inventory provides visibility into your eNlight 360° computing environment. eNlight 360° offers an easy way for customers to track their resources and the associated configurations. </p>
          <p>Customers can monitor various resources through eNlight Cloud; the monitoring module shows server, network, and administration dashboards. Each box is shown as a separate device with its Name and IP in a server dashboard, which is a graphical representation of the Server, VM, and Storage Heat Map. The alert's severity is shown by the heat map box's colour based on the monitoring parameter for that particular device. The Router, Switch, and Firewall Heat Map is depicted graphically on a network dashboard, and each box is represented as a distinct device with its Name and IP. The alert's severity is shown by the heat map box's colour based on the monitoring parameter for that particular device. The hardware, deployment type, and device count are all graphically represented on the management dashboard. </p>
          <p>Customers can build a virtual machine with the configuration they need using eNlight Cloud. The VM Add option allows users to add a VM. Instead of using a template created by CSP, this capability enables customers to create VMs as needed. Customers of eNlight can use this to pinpoint resources and cut costs. Customers can create virtual machines using as few or as many resources as they need with eNlight, depending on the type of hypervisor they use, such as VMware, XEN, Hyper-V, or Nutanix.</p>
          <p>In eNlight 360°, the user can select the modules he wants to enable/disable the notifications. In addition, it will notify the user which modules are under maintenance mode. This functionality eNlight 360° provides an easy way to monitor various resources; a server dashboard is the graphical representation of the Server, VM, and Storage Heat Map. Each box is represented as a single device with its Name and IP. The heat map box's color represents the alert's severity according to its monitoring parameter for that specific device. A network dashboard is the graphical representation of the Router, Switch, and Firewall Heat Map, and each box is represented as a single device with its Name and IP. The heat map box's color represents the alert's severity according to its monitoring parameter for that specific device. Finally, the management dashboard is the graphical representation of Device count, Deployment Type, and Hardware. </p>
          <p> eNlight monitoring provides details of cloud resources and the applications running on the cloud, It collects and track metrics, collects and monitor log files, and set alarms. and also provides SQL based reporting</p>
          <p>eNlight is capable of providing the guidelines for provisioning, configuring, and continuously monitoring the complete cloud infrastructure</p>
          <p>A centralized and independent infrastructure  (Client wise) patch management system is part of the eNlight cloud management platform and has features like patch test, live patch, schedule and concurrent patching.</p>
          <p>In eNlight 360°, a cloud advisor acts like your customized cloud expert and recommends improving system performance and saving money.</p>
          <p>eNlight monitoring allows to enable auditing, security  monitoring,  and  operational  troubleshooting  by tracking user activity and API usage. </p>
          <p>eNlight cloud allows to enforce client organization level security compliacnes and governance. In case of non conformance the system trigger events and alerts as defined by the prganization</p>
          <p>eNlight cloud provides template,JSON-format,text-based file describing the resources required by the client application</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(3)}>DevOps</AccordionHeader>
         <AccordionBody className="accordina-body">

          <p> To automatically build, test, distribute, deploy, and monitor applications on any operating system, you can utilize a combination of various Devops tools and practices. Largely, this involves:</p>

          <strong> Code Repository:</strong>
          <ul>
            <li>Developers work on codebase and use a version control system like Git to manage the code.</li>
            <li>They push their changes to a repository, hosted on platforms like GitHub, GitLab, or Bitbucket.</li>
          </ul>
          <strong> Code Build:</strong>
          <ul>
            <li>Build automation tool like Apache Maven, Gradle, or Jenkins define and manage the build process.</li>
            <li>Create build scripts to specify how your application should be built, including compiling source code, resolving dependencies, and generating executable artifacts.</li>
          </ul>
          <strong> Code Test:</strong>
          <ul>
            <li>Utilize a testing framework like JUnit, or Selenium for automated unit testing, integration testing, and functional testing.</li>
            <li>Write test cases to cover different aspects of your application's functionality.</li>
          </ul>
          <strong> Distribute:</strong>
          <ul>
            <li>Create distribution packages or artifacts for your application, such as JAR files or container images.</li>
            <li>Continuous delivery tools like GitLab CI/CD, Jenkins, or Github Actions to automate the distribution process.</li>
          </ul>

          <strong> Deploy:</strong>
          <ul>
            <li>Use infrastructure as code (IaC) tools like Terraform or AWS CloudFormation to define and manage your infrastructure.</li>
            <li>Create deployment scripts and deployment automation tool like Ansible, Chef, or Puppet to automate the deployment process across different operating systems.</li>
          </ul>

          <strong> Monitor:</strong>
          <ul>
            <li>Prepare your application with monitoring tools like Prometheus, Grafana to collect metrics and monitor its health and generate alerts</li>
            <li>Set up log aggregation and analysis tools like ELK Stack (Elasticsearch, Logstash, Kibana) or Splunk to centralize and analyze log data.</li>
          </ul>

          <strong> Feedback and Improvement:</strong>
          <ul>
            <li>Use the feedback from the CI/CD pipeline, including test results, monitoring data, and user feedback, to identify areas for improvement.</li>
            <li>Iterate on the process, make adjustments, and refine the pipeline based on lessons learned and evolving requirements.</li>
          </ul>
          <strong> Benefits of setting the Process: </strong>
          <ol>
            <li><strong>Early detection of integration issues: </strong>Regularly merging code changes helps identify integration conflicts early, minimizing conflicts between developers' changes.</li>
            <li><strong>Faster feedback loop:</strong> Automated builds and tests provide quick feedback to developers, enabling them to address issues immediately.</li>
            <li><strong>Code quality assurance: </strong>Automated testing ensures that the codebase meets the defined quality standards.</li>
            <li><strong>Confidence in the codebase:</strong> Successful builds and passing tests build confidence in the stability and reliability of the code.</li>
            <li><strong>Collaboration: </strong>Development teams can collaborate effectively, identify and resolve issues early, and maintain a high level of code quality throughout the development cycle.</li>
          </ol>
          <div class="my-5 text-center" className="accordian-img"> <img src={devops} alt="ESDS" class="figure-img img-fluid " /> </div>

          <strong> Cloud Monitoring and Logging:</strong>
          <ul>
            <li>Provide support for monitoring and logging services that allow you to collect and analyze various metrics, logs, and traces from your applications.</li>
            <li>These services aggregate and visualize data related to resource utilization, performance, errors, and other relevant information.</li>
            <li>Tools like Prometheus, Grafana, ELK, Fluentd can serve the purpose</li>
          </ul>

          <strong> Application Performance Management (APM):</strong>
          <ul>
            <li>Enable you to gain insights into your application's performance and identify bottlenecks</li>
            <li>Tools like Prometheus, Grafana, ELK, Fluentd can serve the purpose.</li>
          </ul>

          <strong>Debugging Tools and Profilers:</strong>
          <ul>
            <li>Provide services that help identify and resolve issues within your applications.</li>
            <li>Tools like Valgrind, Strace, Linux perf can be helpful.</li>
          </ul>

          <strong>Diagnostic and Troubleshooting Services:</strong>
          <ul>
            <li>Diagnostic and troubleshooting services help identify and resolve issues with your applications.</li>
            <li>These services often include features like log analysis, error tracking, and incident management.</li>
          </ul>

          <strong>Support and Consulting Services:</strong>
          <ul>
            <li>These services provide expert guidance, best practices, and assistance in identifying and resolving complex issues.</li>
          </ul>
          <p class="my-5">Cloud-based Integrated Development Environment (IDE) services that enable developers to collaborate in real-time. These cloud IDE services provide a web-based development environment accessible from anywhere, facilitating collaboration and streamlining the software development process.
            It comes with features like: </p>

          <strong>Web-Based IDE:</strong>
          <ul>
            <li>A web-based IDE that allows developers to write, edit, and manage code directly in the browser.</li>
            <li>Includes features like code editing, code completion, and version control integration.</li>
          </ul>

          <strong>Collaboration:</strong>
          <ul>
            <li>It enables multiple developers to work on the same codebase simultaneously.</li>
            <li>Collaborative features may include real-time editing, shared code reviews, instant messaging, and audio/video communication.</li>
          </ul>

          <strong>Project Management:</strong>
          <ul>
            <li>Developers can create and organize projects, set up different environments (e.g., development, staging, production), and manage dependencies.</li>
          </ul>

          <strong>Scalability and Performance:</strong>
          <ul>
            <li>Services are scalable allowing developers to work on projects of any size.</li>
            <li>underlying resources are optimized to provide smooth development experience.</li>
          </ul>

          <strong>Security and Access Controls:</strong>
          <ul>
            <li>security measures to protect code and data within the cloud IDE.</li>
            <li>Access controls, authentication mechanisms, and encryption are implemented </li>
          </ul>


          <div class="table-responsive mt-5">
            <table class="theme table">
              <tbody>
                <th>Sr No. </th>
                <th>Features and Operations Supported by ESDS DevOps Service</th>
                <th>Solution Integrated</th>
                <th>Details</th>
                <tr>
                  <td>1.</td>
                  <td>Automatically build, test, distribute, deploy and monitor iOS, Android, Windows and macOS apps—all in one place </td>
                  <td>Jenkins </td>
                  <td>Jenkins is a CI/CD tool which is best practices for automatically build, test, distribute & deploy purpose</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Developers can regularly merge their code changes into a central repository, after which automated builds and tests are run.</td>
                  <td>Gitlab</td>
                  <td>Gitlab tool can be used for Central Repository purpose to manage and integrate the code regularly. With Gitlab developers can share their code.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Must provide fully managed service to implement end to end CI CD (Continuous Integration & Continuous Deployment) pipeline</td>
                  <td>Jenkins</td>
                  <td>Jenkins is a CICD tool which can be used for building & deploying the application code.</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Should securely store and version application's source code and automatically build, test, and deploy the application</td>
                  <td>Gitlab & Jenkins</td>
                  <td>Gitlab stores the version of source code uploaded by developer to meet the versioning. On other hand, Jenkins automatically builds test & deploy the application</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Cloud Service Provider should offer a managed service to analyze and debug applications</td>
                  <td>SonarQube</td>
                  <td>SonarQube helps developers and teams analyze and improve the quality of their codebase by detecting code smells, bugs, security vulnerabilities, and other issues.</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>The manage service to analyse and debug applications should have   Filtering   capability   and   interactive   capability   to interpret trace data</td>
                  <td>ELK Stack</td>
                  <td>Elastic Stack helps to collect, analyze, and visualize log data from applications. It enables us to filter and search logs based on various criteria, including timestamps, log levels, keywords, and custom fields & trace the data.</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Cloud Service Provider should offer a Cloud based IDE (Integrated Development Platform) service to collaborate with the developers in real time</td>
                  <td>VS Code</td>
                  <td>Visual Studio Code (VS Code) allows to share workspaces with others, facilitating collaboration and concurrent editing of code. Workspace sharing in VS Code enables multiple developers to work on the same project simultaneously, making it easier to collaborate and coordinate efforts.</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Cloud Service Provider should offer a managed source control service to store code in Private Git Repositories</td>
                  <td>Gitlab, Bitbucket</td>
                  <td>Gitlab offers a managed service to store the code in Private Git Repositories.</td>
                </tr>
              </tbody>

            </table>

          </div>




        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(4)}>eNlight kubernetes service</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p>The architecture of Docker consists of several key components working together:</p>

          <ol>
            <li><strong>Docker Engine:</strong> The Docker Engine is the core runtime that runs and manages containers. It consists of the Docker daemon (dockerd) and the Docker client (docker). </li>
            <li><strong>Docker Images:</strong> Docker images are read-only templates that contain everything needed to run an application, including the code, runtime, libraries, and system tools. </li>
            <li><strong>Containers:</strong> Containers are lightweight and isolated runtime environments created from Docker images. Each container runs as a separate process on the host machine and has its own isolated filesystem, network interface, and process space. </li>
            <li><strong>Docker Registry:</strong> Docker Registry is a repository that stores Docker images. The default public registry is Docker Hub</li>

            <li><strong>Docker Compose:</strong> Docker Compose is a tool for defining and running multi-container Docker applications. It allows developers to define a multi-service application in a declarative YAML file, specifying the services, their configurations, and dependencies. </li>
            <li><strong>Docker Networking:</strong> Docker provides a networking subsystem that allows containers to communicate with each other and with the outside world. By default, each container gets its own unique IP address within a private network created by Docker. </li>
            <li><strong>Docker Volumes:</strong> Docker volumes are used to persist and share data between containers and the host machine. Volumes are directories stored outside the container's filesystem, allowing data to persist even if the container is removed. </li>
          </ol>


          <div class="my-5 text-center" className="accordian-img">
            <img src={enlight_kubernet} alt="ESDS" class="figure-img img-fluid " />
          </div>

          <p>The working of Kubernetes can be understood through the following key steps:</p>

          <ol>

            <li><strong>Defining the desired state:</strong> You define the desired state of your application or services using Kubernetes manifests or configuration files. </li>
            <li><strong>Creating Pods:</strong> A pod is a logical group of one or more containers that are scheduled together on the same host, and created based on manifest of pod.</li>
            <li><strong>Scheduling Pods:</strong> The Kubernetes scheduler assigns pods to appropriate nodes in the cluster based on resource requirements, constraints, and availability. </li>
            <li><strong>Managing Replicas:</strong> Kubernetes provides the ability to scale applications by managing replicas. </li>
            <li><strong>Service Discovery and Load Balancing:</strong> Kubernetes provides a built-in service discovery mechanism. It assigns a unique IP address and DNS name to each set of pods behind a service. Also automatically load balances the traffic across the pods associated with a service.</li>
            <li><strong>Health Monitoring and Self-healing:</strong> Kubernetes continuously monitors the health and status of the pods. If a pod becomes unhealthy or fails, Kubernetes takes corrective actions to maintain the desired state. </li>
            <li><strong>Updating and Rolling Deployments:</strong> Kubernetes supports rolling updates, allowing you to deploy new versions of your application without downtime. </li>
            <li><strong>Managing Persistent Storage:</strong> Kubernetes provides mechanisms to manage persistent storage for applications. It supports various storage options Persistent Volumes (PV) and Persistent Volume Claims (PVC) are used to abstract the underlying storage infrastructure. </li>
            <li><strong>Cluster Scaling and High Availability:</strong> Kubernetes supports scaling the cluster itself by adding or removing nodes. This helps in dynamically adjusting the cluster's capacity to handle increased or decreased workload. </li>
            <li><strong>Monitoring, Logging, and Observability:</strong> Kubernetes ecosystem offers various tools and integrations for monitoring and logging the cluster and application metrics. </li>
          </ol>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(5)}>Virtual Machine or Compute</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p><strong> i.</strong> eNlight Cloud enables customers to create a virtual machine of their required configuration. Users can add a VM using the VM Add option. This feature allows customers to create a VM as required instead of a template defined by CSP. This helps eNlight customers to define precise resources and save cost. eNlight enables customers to create VM of minimum possible or maximum possible resources based on the type of hypervisors like VMware, XEN, Hyper – V, KVM and Nutanix. Before proceeding with VM creation, it should be ensured that the required quota of resources is available for the respective group. The Compute layer in eNlight cloud consists of latest Intel® Xeon® Scalable Processors with built-in accelerators and advanced security technologies for the most in-demand workload requirements</p>
          <p><strong>ii.</strong> Horizontal scaling is the conventional scaling methodology that is based on load balancing. eNlight 360° also provides horizontal Scaling based on software-defined load balancing, with which virtual machines automatically scale out or scale in depending upon workloads.</p>
          <p><strong>iii.</strong> Vertical Auto- scaling is a patented (US 9176788) and unique eNlight Cloud orchestration software feature. eNlight automatically scales virtual machine resources on the fly. The resources of a virtual machine are scaled between the minimum and maximum resources assigned to it in proportion to the load over it. This is done by an intelligent algorithm that monitors its resources and scales them up or down accordingly. This helps in cutting down the cloud expenses while providing consistent performance to users. This makes eNlight a cost-effective and one of its kind Cloud Orchestration software.</p>
          <p><strong>iv.</strong> Storage services are Virtual representations of Physical Storage for flexibility of customized allocation/deallocation of storage capacity to VMs. eNlight provides the tools and technologies to abstract the underlying Storage infrastructure in an easy and standardized consumption model. eNlight 360° is a scalable, high-speed, web–based cloud storage service that allows your on-premises applications to use eNlight 360° cloud storage seamlessly. </p>
          <p><strong>v.</strong> eNlight 360° monitoring allows you to track cloud resources' health, performance, uptime, and downtime. eNlight 360° server dashboard helps to identify, collect and display the resource utilization such as VM, Disk, server, etc.</p>
          <p><strong>vi.</strong> Our physical core-to-vCPU ratio is 1:2 for all Virtual Machines. This is the standard practice we follow for all hypervisors.</p>
          <p><strong>vii.</strong> eNlight 30° provides a free trial of 30 days to the users so that they can access the application for the respective time period. However, once the trial period is over, access for all the modules will be disabled; the user needs to enter the license key in order to access desired modules. </p>
          <p><strong>viii.</strong> Customers can create new VMs using eNlight 360° through its UI interface or the CLI, enabling them to create a virtual machine of their required configuration.</p>
          <p><strong>ix.</strong> Over the years, Cloud computing has become more of an ingenious business model that provides organizations with agility and efficiency as a significant part of this digital transformation era. Digitization has undoubtedly transformed the Indian economy, and many industries have jumped onto this trend to grow their business; embracing the cloud is only a smart move. The cloud offers flexibility and a pay-as-you-go service model, which received wide traction during the peak COVID period when the demand was highest, and the cloud was able to help businesses in distress. Amongst other services, security services offered by the cloud are another factor for businesses to consider since cyber security is one of the grave concerns faced worldwide.</p>
          <p><strong>x.</strong> Operating systems with Virtual Machines are offered supporting both BYOL (Bring Your Own License) and PAYG (Pay As You Go) models, including continuous updates and upgrades for the entire contract duration.</p>
          <p><strong>xi.</strong> Cloud services feature simple pay-as-you-go pricing, allowing customers to pay for compute capacity by the hour without any long-term commitments.</p>
          <p><strong>xii.</strong> Virtual Machines with flexible storage size are provided to meet your extensive storage and computing needs.</p>

          <p><strong>xiii.</strong> Virtual Machines should not have console access.</p>
          <p><strong>xiv.</strong> Providing consolidated view of the availability, integrity and consistency of the Web/App/DB tiers.</p>
          <p><strong>xv.</strong> The CSP provides dedicated hosts for virtual machine instances.</p>
          <p><strong>xvi.</strong> ESDS offers GPU as a Service, including options like H100, H200, LS40, and more, with the flexibility to provide any variant based on customer demand.</p>
          
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(6)}>Block or Instance Storage</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p> Disk IOPS can be applied to new or existing virtual machines with eNlight 360°. Disk IOPS manages storage performance efficiency. In addition, it improves service quality and handles disk I/O, preventing VMs from using too many disk operations and creating I/O bottlenecks. eNlight 360° currently offers Disk IOPS in three levels: Gold, Platinum, and Silver</p>

          <strong>Data Security at storage layer:</strong>

          <ul>
            <li>ESDS Storage provides the protects against unauthorized access to lost, stolen, or failed drives by ensuring all sensitive user data on the system is encrypted as it is written to disk. It does this through hardware-based encryption modules located in the SAS controllers and SAS IO modules which encrypt data as it is written to the backend drives, and decrypt data as it is retrieved from these </li>drives.

            <li>Additionally, controller-based method has minimal performance impact for typical mixed workloads, and no impact to other storage service services due to the level at which the encryption is performed. </li>

            <li>For key generation and management, ESDS Storage by default uses an internal, fully-automated key manager. This key manager has several responsibilities including generating keys using AES-256, storing keys in a secure key-store, monitoring drive status changes that result in key creating/deletion, and encryption of all data encryption keys prior to moving them within the array for all encryption operations.</li>

            <li>ESDS Stored data security is achieved through the combined use of several encryption keys, which together ensure that neither the drives themselves, nor the keys which encrypt these drives, can be read by unauthorized parties finding themselves in possession of drives that have been removed from the storage system.</li>

            <strong>Data encryption in-transit:</strong>
            <li>For in transit data encryption, IPSEC VPN can be utilized between Ports to client and cloud services.</li>


          </ul>

          <p>SSD-backed block storage are offered with low latencies, high durability, and support for annual failure rates of less than 0.01%. </p>
          <p>Storage allows flexible volume size increases in small increments, supports high random read operations, and provides secure data controls within the Storage Area Network to restrict client access to allocated storage.</p>

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 7} icon={<Icon id={7} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(7)}>File Storage</AccordionHeader>
         <AccordionBody className="accordina-body">
        <strong>eNlight 360° offers a fully</strong> 
			  <p>  managed secure cloud file storage service. In eNlight 360°, while adding a master compute, the user needs to enter the URL, username, and password. Then, the system will verify those credentials and proceed further.</p>
			  
			  <strong>Data Security at storage layer</strong>
			  <p>ESDS Storage provides the protects against unauthorized access to lost, stolen, or failed drives by ensuring all sensitive user data on the system is encrypted as it is written to disk. It does this through hardware-based encryption modules located in the SAS controllers and SAS IO modules which encrypt data as it is written to the backend drives, and decrypt data as it is retrieved from these drives. </p>
			  
			  <p>Additionally, controller-based method has minimal performance impact for typical mixed workloads, and no impact to other storage service services due to the level at which the encryption is performed. </p>
			  
			 <p> For key generation and management, ESDS Storage by default uses an internal, fully-automated key manager. This key manager has several responsibilities including generating keys using AES-256 ,storing keys in a secure key-store, monitoring drive status changes that result in key creating/deletion, and encryption of all data encryption keys prior to moving them within the array for all encryption operations.</p>
			  
			 <p> ESDS Stored data security is achieved through the combined use of several encryption keys, which together ensure that neither the drives themselves, nor the keys which encrypt these drives, can be read by unauthorized parties finding themselves in possession of drives that have been removed from the storage system. </p>
			  
			
			 <p> <strong>  Data encryption in-transit </strong> For in transit data encryption, IPSEC VPN can be utilized between Ports to client and cloud services.</p>
			  
			    <p>Enterprise cloud storage allows to scalibility to Petabyte which can be accessed by thousands of concurrent NFS users</p>
			  
			  
			  <p>Depending on the selection of the storage categories and IOPs latency varies from 2 milli seconds to 15 milliseconds</p>
			  
			  <p>All ESDS data centers are connected with multi Gbps fiber connectivity which allows seamless replication and data redundancy for the client at enterprise cloud storage layer</p>
			  
			  <p>eNlight enterprise cloud storage provides read after write consistency where each read-and-write operation is guaranteed to return the most recent version of the data</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 8} icon={<Icon id={8} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(8)}>Network</AccordionHeader>
         <AccordionBody className="accordina-body">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="my-5 text-center" className="accordian-img">
                <img src={network} alt="ESDS" class="figure-img img-fluid " />
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12">
              <ul>
                <li> PoP of all major ISPs for high performance bandwidth and redundancy </li>
                <li>Capability of providing dedicated private connectivity between client location and any of the ESDS DC</li>
                <li>Entire ESDS Network infrastructure supports IPV6 addresses.</li>
                <li>Redundant fiber network from Each ISP from multiple geographic location </li>
                <li>100/40/25 and 10 Gbps network for east west cloud traffic </li>
                <li>Separate core network for enterprises-level customers for dedicated bandwidth </li>
                <li>Sound network infrastructure to handle intensive traffic load of cloud customers </li>
                <li>Separate MPLS network for Banking and enterprise customers</li>
                <li>BGP4 routing protocol for internet peering </li>
                <li>OSPF routing protocol for internal traffic </li>
                <li>GRE tunnel networks across multi datacenters </li>
                <li>Software defined network for cloud infrastructure </li>

              </ul>
            </div>


            <div class="col-lg-12 col-md-12 col sm-12">

              <p>ESDS Cloud Service unlocks the potential of business with a <strong>Virtual LAN Infrastructure and Static IP Addresses.</strong> A virtual LAN (VLAN) infrastructure allows to partition client's network into separate virtual networks, enhancing security and optimizing performance. Coupled with static IP addresses, which provide consistent and reliable access. This  ensures seamless communication and efficient network management. With non-internet routable addresses, internal network remains secure from external threats. </p>

              <p>Provides flexibility to <strong>Deploy Virtual Machines (VMs) in multiple security zones</strong> tailored to project's requirements, all through network isolation layers. With this capability, we can create distinct security zones within infrastructure, ensuring that sensitive data and applications remain isolated and protected. Whether the need to segregate Development, Testing, and Production Environments or establish separate zones for different projects, the ability to deploy VMs in multiple security zones allows for efficient resource allocation, enhanced security, and streamlined management. </p>

              <p>Provides private connectivity between Client's <strong>network and CSP's (Cloud Service Provider)</strong> Data Centre facilities through Direct Connection or Express Route. This dedicated and secure connection enables seamless communication and data transfer between organization's network and the CSP's infrastructure. Bypassing the public internet allows enhanced network performance, improved latency, and increased reliability. Private connectivity ensures optimal access to cloud services, facilitates data migration, and enables robust disaster recovery solutions. </p>

              <p>ESDS offers a versatile infrastructure that enables the provision of external <strong>IPv6 Address</strong> termination for applications hosted on the cloud. With the growing adoption of IPv6, it is crucial for businesses to support this next-generation Internet protocol. By providing external IPv6 address termination,  applications hosted on the cloud can seamlessly communicate with IPv6-enabled networks and devices. </p>

              <p>ESDS ensures seamless connectivity to the <strong>Wide Area Network (WAN)</strong> by leveraging high-bandwidth links of suitable capacity at both the data center and disaster recovery data center facilities. The infrastructure accommodates the varying requirements of users while maintaining segregation of access paths among different user categories. This segregation ensures secure and optimized network performance, allowing efficient data transfer and smooth communication across the organization. With a scalable and segregated access path framework, reliable connectivity can be provisioned to meet the specific needs of each user category, enhancing productivity and user experience. </p>

              <p>ESDS possess the capability to deliver sufficient <strong> Bandwidth between the Primary Data Centre and Disaster Recovery Data Centre</strong> to facilitate seamless data replication. This ensures that critical data and applications are continuously synchronized between the two centers, enabling robust disaster recovery capabilities. Dedicated Point to Point link and adequate bandwidth is available to support efficient and timely replication, minimizing data loss and downtime in the event of a disaster. Leveraging the CSP's bandwidth capabilities ensures the integrity and availability of data across both centers, enhancing business continuity and resiliency. </p>

              <p>In ESDS Data Centers, <strong>Network-level redundancy</strong> is enabled by leveraging MPLS links from multiple service providers. This approach ensures that network connectivity remains uninterrupted even in the event of a service provider outage or network failure. By establishing multiple MPLS links, alternate routing paths is facilitated through the ISP backbone, providing redundant and diverse connectivity options. Redundant network devices further enhance network resiliency, minimizing the risk of single points of failure. This comprehensive redundancy strategy ensures high availability, seamless connectivity, and minimized downtime, enabling organization to maintain critical operations and uninterrupted access to network resources. </p>


              <div class="my-5 text-center" className="accordian-img">
                <img src={network_diagram} alt="ESDS" class="figure-img img-fluid " />
              </div>


              <p>Cloud service <strong>supports multiple network interfaces,</strong> allowing the configuration of primary and additional interfaces. This feature enables network segmentation, load balancing, redundancy, and seamless integration with external networks or VPNs. Benefit from enhanced flexibility and connectivity options, optimizing cloud-based applications and services. </p>

              <p>Service <strong>supports multiple IP addresses per instance,</strong> enabling hosting of multiple websites on a single server and facilitating network appliances with multiple private IP addresses for each network interface. This flexibility optimizes resource utilization and enhances network configurations, empowering efficient management of diverse use cases. </p>

              <p>Cloud service allows the <strong>movement of network interfaces and IPs between instances. </strong> This includes the ability to reserve a static IP, attach it to an instance, detach it from one instance, and then attach it to another instance as needed. This flexibility enables seamless migration, reconfiguration, and resource optimization within cloud environment, empowering to adapt and scale infrastructure efficiently. </p>

              <p>Cloud service offers enhanced networking support, including capabilities such as <strong>Single Root I/O Virtualization (SR-IOV).</strong> This features offload virtual network processing to hardware, resulting in higher performance in terms of packets per second, lower latency, and reduced jitter. By leveraging these advanced networking capabilities, we can achieve optimal network performance, improved responsiveness, and a seamless user experience within cloud infrastructure. </p>

              <p><strong>Supports network traffic logging,</strong> specifically capturing information about IP traffic flowing to and from network interfaces. This feature, often referred to as flow logging, allows to monitor and analyze network traffic patterns, helping to identify potential security threats, troubleshoot network issues, and gain insights into network performance. By enabling network traffic logging, the cloud service empowers with enhanced visibility and control over network, facilitating effective monitoring and management of cloud-based infrastructure. </p>

              <p>Has the capability to <strong>automatically assign public IP addresses to instances.</strong> This feature eliminates the need for manual configuration, streamlining the provisioning process and enabling instances to have direct public internet access.This automation enhances convenience and enables rapid deployment of instances with immediate connectivity capabilities. </p>

              <p>Cloud service supports <strong>multiple IP protocols,</strong> including TCP, UDP, and ICMP. This ensures compatibility and flexibility in handling different types of network traffic and communication within cloud environment. With support for these protocols, we can effectively deploy and manage a wide range of applications, services, and network configurations, accommodating various networking needs and requirements. Benefit from seamless interoperability and efficient handling of TCP, UDP, and ICMP protocols within cloud infrastructure. </p>

              <p>Services offers <strong>support for IP address ranges specified in RFC 1918,</strong> which includes private IP address ranges, along with publicly routable CIDR blocks. This flexibility allows to utilize any network CIDR, whether it falls within the private IP range for internal use or the public IP range for external connectivity. By accommodating both RFC 1918 and publicly routable CIDR blocks, the cloud service enables to design and configure network infrastructure according to specific needs, ensuring seamless integration with both internal and external networks. </p>

              <p><strong>Supports static public IP addresses</strong> associated with a customer account rather than a specific instance. This means that the assigned IP address remains associated with the account until explicitly released, providing consistency and reliability. With static public IP addresses, we can ensure stable connectivity and maintain the continuity of services, even when instances are created or terminated. This feature enables predictable addressing and simplifies network management, allowing to maintain long-term associations with specific IP addresses within cloud environment. </p>

              <p>ESDS cloud service has the capability to <strong>automatically create a default virtual private network (VPN)</strong> along with a corresponding subnet. Instances launched into this default subnet receives both a public IP address for external communication and a private IP address for internal communication. This default private network setup simplifies the provisioning process, providing instances with the necessary network connectivity out-of-the-box. </p>

              <p>ESDS Cloud Service provides Customers to <strong>create multiple subnets</strong> within a private network using a single CIDR block. This allows efficient IP address allocation and network segmentation, enabling secure communication and resource management within the private network environment. </p>

              <p>ESDS cloud service supports <strong>ingress filtering,</strong> also known as security groups, which allows users to add or remove rules for inbound traffic (ingress) to instances.
                This feature enables fine-grained control over network access, allowing users to define specific rules to permit or deny incoming traffic to their instances based on various criteria such as source IP, port, or protocol. By leveraging ingress filtering, users can enhance the security of their instances and networks, ensuring that only authorized traffic is allowed to reach their resources. </p>

              <p>ESDS cloud service supports <strong>egress filtering,</strong> enabling users to add or remove rules for outbound traffic (egress) from instances. This feature acts as a stateful firewall, allowing users to control and monitor outbound communication, enhancing network security and ensuring compliance with organizational policies. </p>

              <p>ESDS cloud service allows users to <strong>disable source/destination checks</strong> on network interfaces. This flexibility enables advanced networking configurations and is particularly useful for scenarios involving NAT gateways or load balancers, where source/destination verification is not required. By disabling these checks, users can optimize their network architecture and improve the efficiency of network traffic flow within the cloud environment. </p>

              <p>ESDS cloud service supports configuring a<strong> NAT instance</strong> at the network level. This enables routing of traffic from internal-only instances to the Internet, providing outbound Internet connectivity while maintaining the privacy and isolation of internal resources within the cloud environment. </p>

              <p>ESDS cloud service supports a <strong>site-to-site managed VPN service,</strong> enabling a secure connection between the cloud provider and the customer's data center.
                This allows for encrypted communication and seamless integration of the customer's on-premises infrastructure with the cloud environment. </p>

              <p>Supports <strong>virtual network peering, </strong>enabling the connection of two virtual networks using private IP addresses for secure and efficient communication between them.
                This feature simplifies network architectures and enhances the flexibility and scalability of the cloud infrastructure.
              </p>

              <p><strong>Multiple VPN connections per virtual network, </strong>allowing for the establishment of multiple secure connections with external networks or data centers. This feature enhances network flexibility, redundancy, and scalability, enabling efficient communication and seamless integration with external resources within the cloud environment. </p>

              <p>Provide support for <strong>Border Gateway Protocol (BGP)</strong> for high availability and failover. BGP enables robust liveness checks on IPSec tunnels and simplifies the failover process when VPN tunnels go down. This enhances network reliability and resilience within the cloud infrastructure. </p>

              <p><strong>Capable of providing Private connections to customer data centers,</strong> offering direct leased-line connections or MPLS connectivity. This results in reduced network costs, increased bandwidth, and a more consistent network experience compared to internet-based connections. Private connections ensure secure and reliable communication between the customer's infrastructure and the cloud environment. </p>

              <p><strong>DNS/Anycast-based global load balancing</strong> for load balancing instances across multiple host servers. This ensures efficient traffic distribution, improves performance, and enhances scalability within the cloud environment. </p>

              <p>Provide supports for <strong>multiple load balancing routing methods,</strong> including round-robin, failover, and sticky session. These options allow for efficient traffic distribution, high availability, and session persistence based on the application's needs. </p>

              <p>We supports <strong>a front-end load balancer</strong>that distributes client requests across registered instances. This load balancing mechanism enhances application scalability and performance by efficiently handling incoming traffic from the internet. An internal load balancer capable of routing traffic to instances within private subnets. This back-end load balancer ensures efficient distribution of traffic and workload among instances, enhancing the performance and availability of applications hosted in private subnets. By supporting an internal load balancer, the cloud service enables seamless and reliable communication between instances within the private network, improving the overall scalability and resilience of the cloud-based infrastructure. </p>

              <p>ESDS cloud service supports <strong>health checks</strong> to monitor the health and performance of resources. These health checks enable continuous monitoring of applications and resources, ensuring their availability and optimal performance. By implementing health checks, users can proactively identify and address issues, maintain high service reliability, and deliver a seamless user experience within the cloud environment. </p>

              <p><strong>Seamless integration with load balancers is available.</strong> This integration allows load balancers to work effectively with the cloud service, ensuring efficient distribution of traffic and workload across instances. By enabling integration with load balancers, users can achieve optimal performance, scalability, and high availability for their applications and services hosted in the cloud environment. </p>

              <p><strong>Low-latency 25 Gig network connectivity between servers,</strong> ensuring fast and efficient communication and data transfer. This high-speed connectivity facilitates rapid response times, reduces latency, and enables seamless interaction between the servers within the cloud infrastructure. By offering such low-latency network connectivity, the CSP enhances the overall performance and responsiveness of applications and services hosted in the cloud environment. </p>

              <p>Offers a <strong>globally distributed content delivery network (CDN)</strong> that provides services through points of presence (POPs) and edge network services. The CDN supports the efficient delivery of static HTTP content and media content using the Real-Time Streaming Protocol (RTSP). This enables optimized content delivery, improved performance, and enhanced user experience by delivering content from edge locations closer to the end-users. The globally distributed CDN infrastructure ensures fast and reliable content delivery across different geographical regions, reducing latency and network congestion. </p>

              <p>Provides <strong>endpoint services </strong>that allow users to access various resources from within the internal cloud network. These endpoint services enable secure and seamless connectivity to databases, storage systems, APIs, and other resources within the cloud environment. By supporting endpoint services, the CSP enhances the accessibility and ease of use for users, enabling efficient utilization of cloud resources and facilitating smooth integration with applications and services. </p>

            </div>
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 9} icon={<Icon id={9} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(9)}>eNlight Business Continuity Structure</AccordionHeader>
         <AccordionBody className="accordina-body">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="my-5 text-center" className="accordian-img">
                <img src={eNlight_Business_Continuity_Structure} alt="ESDS" class="figure-img img-fluid " />
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 padding-left">
              <strong>Replication Strategies </strong>

              <ul>
                <li><strong> Site Recovery and Monitoring Tool :</strong> ESDS provides technology for replicating any  VM to a different ESDS geographical location directly from the DRM/eNlight portal.</li>

                <li><strong>eNlight Storage replication :</strong>  Copies data synchronously within a single physical location in the primary region using Storage to storage replication technology which has been integrated with eNlight cloud orchestration. Also Have the capability to replicate the data to different ESDS cloud location</li>

                <li><strong>DB Level:</strong> Database level replication with the inbuilt utility of the respective database</li>

              </ul>



              <strong>Switchover/Switchback technology </strong>
              <p>eNlight Global traffic manager and DRM:</p>
              <ul>
                <li>eNlight GTM profile will be created with DRM deployed on required servers.</li>
                <li>Utilizing the Priority routing method with GTM will be created–Primary for the source region and Failover for the recovery region</li>
                <li>eNlight GTM detects that the Primary endpoint is no longer healthy, it automatically uses the Failover endpoint in the DNS response and users connect to the application recovered on the secondary site.</li>
                <li>DRM tool replicates workloads from a primary site to a secondary location with required RPO/RTO monitoring.</li>
                <li>The Cloud Service enables the sharing of backups and snapshots across regions, facilitating geographical expansion, data center migration, and disaster recovery with ease.</li>
              </ul>


            </div>
          </div>

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 10} icon={<Icon id={10} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(10)}>Databases</AccordionHeader>
         <AccordionBody className="accordina-body">
        <div class="accordion-body">
            <p> eNlight 360° supports different database services such as MySQL, MSSQL, Oracle, etc., which makes it simple to set up and scale databases in the cloud. In addition, we provide other monitoring parameters for different databases, like MySQL- Connection Timeout, Aborted clients, Aborted Connections, Connections, and so on.</p>
            <p> Postgre- Connection Time, Active Connections, Total Users, Disk Usage, Index Usage, and so on.</p>
            <p> Oracle- Buffer Cache Size, Shared Pool Size, Fixed Area Size, Java Pool Size, Free Memory, and so on.</p>
            <p> ESDS cloud supports a range of open-source NoSQL databases, to name a few MongoDB, Apache Cassandra, Apache HBase, etc. As for your requirement for a key-value pair NoSQL database, we will be suggesting MongoDB which supports features like key-value pair, secondary indexes, change streams, scalability, etc. ESDS is capable to provide cross-region replication of data, from the primary Data Center in Maharashtra to the secondary Data Center in Bangalore. </p>
           
            <p> ESDS cloud supports a range of open-source NoSQL databases, to name a few MongoDB, Apache Cassandra, Apache HBase, etc. MongoDB supports features like key-value pair, secondary indexes, change streams, scalability, etc. ESDS is capable to provide cross-region replication of data, from the primary Data Center in Maharashtra to the secondary Data Center in Bangalore</p>
			  
			 <p>Few methodologies for Database Replication and Failover are as defined below </p>
			  
			   <div class="my-5 text-center" className="accordian-img"> 
				   <img src={Oracle_Databases} alt="ESDS" class="figure-img img-fluid " /> 
			  </div>
			  
			  <div class="my-5 text-center" className="accordian-img"> 
				   <img src={PostgreeSQL_database} alt="ESDS" class="figure-img img-fluid " /> 
			  </div>
			  
			  <div class="my-5 text-center" className="accordian-img"> 
				   <img src={MS_SQL_database} alt="ESDS" class="figure-img img-fluid " /> 
			  </div>
			  
			  <strong>Architecture consists of two separate farms in two different cities Primary site and secondary site, both servers accessible by users over the internet link. </strong>
			  
			  
			  <p> <strong>Primary Site: </strong> Primary site will have the two database servers configured in the active – passive mode cluster.</p>
			  
			  <ul>
				  <li><strong>	Primary Database Server:</strong> Primary Sever is the Main Database Server database engine, which is being accessed by the application. Primary Server contains the Primary Database or Master Database. </li>
					  
					  
 				<li><strong>Secondary Database Server:</strong> Secondary Database Server is a Database Engine or a different Server that contains the backup of primary database. We can have multiple secondary severs based on business requirements.  </li>

			  </ul>
			  
			  
			  <p><strong>Secondary Site:</strong> On secondary site standby server will be deployed, it will only use to replicate the data from primary to secondary site. In case disaster the server will be become live. </p>
			  
			  <p>External & internal users will access the site from primary location in case of failure of site user will switch to the secondary site with the minimum down time.</p>
			  
			  
			  
			  <h4 class="blue-text">SQL and NoSQL DB as a Service</h4>
                <p>SQL and NoSQL databases as a service (DBaaS) are cloud-based offerings that provide managed database solutions for both SQL and NoSQL data models. These services eliminate the need for organizations to manage the underlying infrastructure and administrative tasks associated with database management. Instead, users can focus on their applications and data without worrying about server provisioning, maintenance, backups, and scaling.</p>
                
                <div class="my-5 text-center" className="accordian-img"> 
                <img src={SQL_and_NoSQL_DB_as_a_Service} alt="ESDS" class="figure-img img-fluid " /> 
                 </div>


<h4 class="blue-text">SQL DBaaS: </h4>
<p><strong>RDBMS:(Relational Database Service):</strong> Offers managed SQL databases like MySQL, PostgreSQL, Oracle, SQL Server, etc. </p>

<p>SQL DBaaS offerings typically include features like automated backups, high availability, replication for data redundancy, security controls, monitoring, and performance optimization. These services often offer flexible scaling options to handle increased workloads or changing requirements.</p>
<p>Users can interact with SQL DBaaS through APIs, command-line tools, or graphical interfaces provided by the respective cloud platforms. They can perform tasks such as creating databases, managing schemas, executing queries, monitoring performance, and setting up security measures.</p>
<p>SQL DBaaS is suitable for applications that require structured data, strong consistency, ACID transactions, and SQL query capabilities. It is widely used in various industries for web applications, enterprise software, analytics, and reporting.</p>



			  
			  <strong>ESDS SQL Database as a Service packages</strong>
			  
			  
			  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
<div class="table-responsive mt-3">
<table class="theme table">
<tbody>

     <tr>
        <td colspan="2">
        <strong>VM Configuration </strong>
        </td>
        </tr>
    <tr>
      <td>1</td>
      <td>Managed DB - 1 vCPU, 2 GB RAM</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Managed DB - 2 vCPU, 4 GB RAM</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Managed DB - 2 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Managed DB - 4 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Managed DB - 4 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Managed DB - 4 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Managed DB - 8 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Managed DB - 8 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Managed DB - 8 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Managed DB - 16 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Managed DB - 16 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Managed DB - 16 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Managed DB - 32 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Managed DB - 32 vCPU, 256 GB RAM</td>
    </tr>
  </tbody>
</table>
</div>
</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
			<tbody>
				 <tr>
					<td colspan="2">
					<strong>MySQL as a service </strong>
					</td>
					</tr>
				<tr>
				  <td>1</td>
				  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
				</tr>
				<tr>
				  <td>2</td>
				  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
				</tr>
				<tr>
				  <td>3</td>
				  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>4</td>
				  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>5</td>
				  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>6</td>
				  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>7</td>
				  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>8</td>
				  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>9</td>
				  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>10</td>
				  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>11</td>
				  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>12</td>
				  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>13</td>
				  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>14</td>
				  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
				</tr>
			  </tbody>
			</table>
			</div>
		</div>	  
	</div>			  
			  
	 
			  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
<div class="table-responsive mt-3">
<table class="theme table">
<tbody>

     <tr>
        <td colspan="2">
        <strong>PostgreSQL as a Service </strong>
        </td>
        </tr>
    <tr>
      <td>1</td>
      <td>Managed DB - 1 vCPU, 2 GB RAM</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Managed DB - 2 vCPU, 4 GB RAM</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Managed DB - 2 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Managed DB - 4 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Managed DB - 4 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Managed DB - 4 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Managed DB - 8 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Managed DB - 8 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Managed DB - 8 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Managed DB - 16 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Managed DB - 16 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Managed DB - 16 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Managed DB - 32 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Managed DB - 32 vCPU, 256 GB RAM</td>
    </tr>
  </tbody>
</table>
</div>
</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
			<tbody>
				 <tr>
					<td colspan="2">
					<strong>Oracle DB as a Service</strong>
					</td>
					</tr>
				<tr>
				  <td>1</td>
				  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
				</tr>
				<tr>
				  <td>2</td>
				  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
				</tr>
				<tr>
				  <td>3</td>
				  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>4</td>
				  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>5</td>
				  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>6</td>
				  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>7</td>
				  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>8</td>
				  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>9</td>
				  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>10</td>
				  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>11</td>
				  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>12</td>
				  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>13</td>
				  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>14</td>
				  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
				</tr>
			  </tbody>
			</table>
			</div>
		</div>	  
	</div>			  
			  		  
			  
			 <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
<div class="table-responsive mt-3">
<table class="theme table">
<tbody>

     <tr>
        <td colspan="2">
        <strong>Maria DB as a Service</strong>
        </td>
        </tr>
    <tr>
      <td>1</td>
      <td>Managed DB - 1 vCPU, 2 GB RAM</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Managed DB - 2 vCPU, 4 GB RAM</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Managed DB - 2 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Managed DB - 4 vCPU, 8 GB RAM</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Managed DB - 4 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Managed DB - 4 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Managed DB - 8 vCPU, 16 GB RAM</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Managed DB - 8 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Managed DB - 8 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Managed DB - 16 vCPU, 32 GB RAM</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Managed DB - 16 vCPU, 64 GB RAM</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Managed DB - 16 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Managed DB - 32 vCPU, 128 GB RAM</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Managed DB - 32 vCPU, 256 GB RAM</td>
    </tr>
  </tbody>
</table>
</div>
</div>

		  
	</div>			    
			
			
			
			
<h4 class="blue-text">NoSQL DBaaS:</h4>
<p>Managed NoSQL document database service compatible with MongoDB.</p>

<div class="my-5 text-center" className="accordian-img"> 
<img src={NoSQL_DBaaS} alt="ESDS" class="figure-img img-fluid " /> 
 </div>

<p>NoSQL (Not Only SQL) databases are a category of database technologies that provide alternatives to traditional SQL (Structured Query Language) databases. They are designed to handle large volumes of unstructured, semi-structured, and diverse data types, offering flexibility, scalability, and high performance. Here are some key features and offerings of NoSQL database technologies:</p>
<p><strong>Data Model Flexibility:</strong> NoSQL databases offer various data models to accommodate different data types and structures, including:</p>
<p><strong>Document Databases: :</strong> Store and retrieve data in flexible, JSON-like documents (e.g. MongoDB, Couchbase).</p>
<p><strong>Key-Value Stores: :</strong> Use simple key-value pairs for data storage and retrieval (e.g. Redis, Riak).</p>
<p><strong>Wide-Column Stores: </strong>Store data in column families with dynamic columns (e.g., Cassandra, HBase).</p>
<p><strong>Graph Databases: </strong>Represent and query data as nodes, edges, and properties (e.g., Neo4j, Amazon Neptune).</p>
<p><strong>Scalability: :</strong>  NoSQL databases are built to scale horizontally, allowing them to handle large amounts of data and high read/write workloads. They distribute data across multiple servers, enabling seamless scaling as data grows. </p>
<p><strong>High Performance: :</strong> NoSQL databases are optimized for fast data retrieval and processing. They leverage techniques like in-memory caching, sharding, and parallel processing to achieve high throughput and low latency. </p>
<p><strong>Flexibility in Schema Design: :</strong>  NoSQL databases provide schema flexibility, allowing for agile development and accommodating evolving data structures without requiring predefined schemas. </p>
<p><strong>Distributed and Fault-Tolerant Architecture: :</strong> NoSQL databases are designed for distributed environments, ensuring data replication, fault tolerance, and automatic data recovery in case of node failures. </p>
<p><strong>Support for Big Data Analytics: :</strong> Many NoSQL databases integrate with big data processing frameworks like Apache Hadoop and Apache Spark, enabling analytics and complex data processing tasks on large datasets. </p>
<p><strong>Cloud-Native Capabilities: :</strong>  NoSQL databases are well-suited for cloud environments, offering elasticity, scalability, and managed database services as part of cloud platforms. </p>
<p><strong>Developer-Friendly Interfaces: :</strong>  NoSQL databases often provide APIs, libraries, and query languages tailored for specific data models, making it easier for developers to work with the databases. </p>
<p><strong>Use Cases: :</strong>  NoSQL databases are commonly used in various applications and industries, including e-commerce, social media, content management, IoT, real-time analytics, and personalized recommendation systems. </p>
<p>The choice between SQL and NoSQL DBaaS depends on the specific requirements of your application, data model, scalability needs, and the query patterns you anticipate. Consider factors like data structure, transactional consistency, horizontal scalability, and performance characteristics to determine whether a SQL or NoSQL DBaaS solution aligns better with your use case.</p>







  
			  
		<strong>NO SQL Database Managed DB services</strong>
<p>ESDS eNlight cloud services supports and have capability to provide NO SQL database Managed services There are four major types of NoSQL databases emerged: document databases, key-value databases, wide-column stores, and graph databases. </p>
	  
			  
		<ul>
			<li>	Document databases store data in documents similar to JSON (JavaScript Object Notation) objects. Each document contains pairs of fields and values. The values can typically be a variety of types including things like strings, numbers, booleans, arrays, or objects.</li>
<li>Key-value databases are a simpler type of database where each item contains keys and values.</li>
			<li>Wide-column stores store data in tables, rows, and dynamic columns.</li>
<li>Graph databases store data in nodes and edges. Nodes typically store information about people, places, and things, while edges store information about the relationships between the nodes.</li>
			  </ul>
			  
			  
			  
			  <h4 class="blue-text">ESDS NOSQL Database as a Service packages</h4>
			  
			  
			  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>NoSQL DB as a service (MongoDB) </strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
			<tbody>
				 <tr>
					<td colspan="2">
					<strong>NoSQL DB as a service (Cassandra)</strong>
					</td>
					</tr>
				<tr>
				  <td>1</td>
				  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
				</tr>
				<tr>
				  <td>2</td>
				  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
				</tr>
				<tr>
				  <td>3</td>
				  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>4</td>
				  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>5</td>
				  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>6</td>
				  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>7</td>
				  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>8</td>
				  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>9</td>
				  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>10</td>
				  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>11</td>
				  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>12</td>
				  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>13</td>
				  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>14</td>
				  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
				</tr>
			  </tbody>
			</table>
			</div>
		</div>	  
	</div>	
			  
			  
	  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>NoSQL DB as a service (Hbase)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
			<tbody>
				 <tr>
					<td colspan="2">
					<strong>Graph DB as a service (Neo4J)</strong>
					</td>
					</tr>
				<tr>
				  <td>1</td>
				  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
				</tr>
				<tr>
				  <td>2</td>
				  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
				</tr>
				<tr>
				  <td>3</td>
				  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>4</td>
				  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>5</td>
				  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>6</td>
				  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>7</td>
				  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>8</td>
				  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>9</td>
				  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>10</td>
				  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>11</td>
				  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>12</td>
				  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>13</td>
				  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>14</td>
				  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
				</tr>
			  </tbody>
			</table>
			</div>
		</div>	  
	</div>	
			  
				  
	  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>Graph DB as a service (ArangoDB)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
			<tbody>
				 <tr>
					<td colspan="2">
					<strong>Graph DB as a service (Dgraph)</strong>
					</td>
					</tr>
				<tr>
				  <td>1</td>
				  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
				</tr>
				<tr>
				  <td>2</td>
				  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
				</tr>
				<tr>
				  <td>3</td>
				  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>4</td>
				  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
				</tr>
				<tr>
				  <td>5</td>
				  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>6</td>
				  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>7</td>
				  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
				</tr>
				<tr>
				  <td>8</td>
				  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>9</td>
				  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>10</td>
				  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
				</tr>
				<tr>
				  <td>11</td>
				  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
				</tr>
				<tr>
				  <td>12</td>
				  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>13</td>
				  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
				</tr>
				<tr>
				  <td>14</td>
				  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
				</tr>
			  </tbody>
			</table>
			</div>
		</div>	  
	</div>			  
			  		  
			  
	  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>Analytics DB as a service (Hive)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed DB - 1 vCPU, 2 GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed DB - 2 vCPU, 4 GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed DB - 2 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed DB - 4 vCPU, 8 GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed DB - 4 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed DB - 4 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed DB - 8 vCPU, 16 GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed DB - 8 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed DB - 8 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed DB - 16 vCPU, 32 GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed DB - 16 vCPU, 64 GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed DB - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed DB - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed DB - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

	  
	</div>		  
			  
			  
		<h4 class="blue-text">Caching as a service</h4>	  
		
			  
			  
						  
	  <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>Caching as a service (Redis)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed  service  -  1  vCPU,  2  GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed  service  -  2  vCPU,  4  GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed  service  -  2  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed  service  -  4  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed  service  -  4  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed  service  -  4  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed  service  -  8  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed  service  -  8  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed  service  -  8  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed  service  -  16  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed  service  -  16  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed service - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed service - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed service - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="table-responsive mt-3">
			<table class="theme table">
				<tbody>

						 <tr>
							<td colspan="2">
							<strong>Caching as a service (Memcached)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed  service  -  1  vCPU,  2  GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed  service  -  2  vCPU,  4  GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed  service  -  2  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed  service  -  4  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed  service  -  4  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed  service  -  4  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed  service  -  8  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed  service  -  8  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed  service  -  8  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed  service  -  16  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed  service  -  16  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed service - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed service - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed service - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
			</table>
			</div>
		</div>	  
	</div>			  
			  		    
		 <div class="row align-items-center">
			  <div class="col-lg-6 col-md-6 col-sm-12">
					<div class="table-responsive mt-3">
					<table class="theme table">
					<tbody>

						 <tr>
							<td colspan="2">
							<strong>Text Search as a service (Elastic Search)</strong>
							</td>
							</tr>
						<tr>
						  <td>1</td>
						  <td>Managed  service  -  1  vCPU,  2  GB RAM</td>
						</tr>
						<tr>
						  <td>2</td>
						  <td>Managed  service  -  2  vCPU,  4  GB RAM</td>
						</tr>
						<tr>
						  <td>3</td>
						  <td>Managed  service  -  2  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>4</td>
						  <td>Managed  service  -  4  vCPU,  8  GB RAM</td>
						</tr>
						<tr>
						  <td>5</td>
						  <td>Managed  service  -  4  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>6</td>
						  <td>Managed  service  -  4  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>7</td>
						  <td>Managed  service  -  8  vCPU,  16  GB RAM</td>
						</tr>
						<tr>
						  <td>8</td>
						  <td>Managed  service  -  8  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>9</td>
						  <td>Managed  service  -  8  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>10</td>
						  <td>Managed  service  -  16  vCPU,  32  GB RAM</td>
						</tr>
						<tr>
						  <td>11</td>
						  <td>Managed  service  -  16  vCPU,  64  GB RAM</td>
						</tr>
						<tr>
						  <td>12</td>
						  <td>Managed service - 16 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>13</td>
						  <td>Managed service - 32 vCPU, 128 GB RAM</td>
						</tr>
						<tr>
						  <td>14</td>
						  <td>Managed service - 32 vCPU, 256 GB RAM</td>
						</tr>
					  </tbody>
					</table>
					</div>
					</div>

  
	</div>			  	  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
          </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 11} icon={<Icon id={11} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(11)}>Object Storage</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p> Object  storage (object-based storage) is a type of  storage in which  we  organize and work with units  of storage, called  objects. Every object contains three things:</p>
          <ul>
            <li><strong>The data: </strong> The data can be anything you want to store, from  a simple photo to 500,000 video clips. </li>
            <li><strong>An expandable amount of  metadata:</strong> The metadata is  defined by whoever creates the object storage; it contains contextual information  about what the data is, what it should be used for,  its  confidentiality, or anything else that is relevant to the way in which the data is used. </li>
            <li><strong>A globally unique identifier:</strong> The identifier is an address given to the object in order for the object to be found over a distributed system. This way, it’s possible to find the data without having  to know  the physical location of the data (which could  exist within  different parts of  a  data center or  different parts of  the world). </li>
          </ul>
          <p><strong>eCOS </strong> is   eNlight   Cloud    Object  Storage   which    enables  infinite   vertical   and horizontal auto-scale for  your  enterprise  objects. With  eCOS,  users can customize Meta data to search and  fetch data in a few  clicks, replicate data across platforms/regions,  manage  terabytes  of   data  systematically in  a secure  cloud environment. With eCOS, enterprises reduce the TCO of storage infrastructure with eNlight’s  pay-per-use model.</p>
          <p><strong>eCOS</strong> is provided as an Add-on  service with which users can avail the service using  a self-service portal.</p>
          <p><strong>Architecture</strong></p>
          <p>eCOS  object  storage  servers are   configured  in  cluster  fashion  across  multiple datacenters in  India. Data is synchronized in  the background across all  clustered nodes for data redundancy.</p>
          <div class="my-5 text-center" className="accordian-img"> <img src={ecos} alt="ESDS" class="figure-img img-fluid " /> </div>
          <p> <strong>Initial setup, Configuration & Working</strong></p>
          <p><strong>1.  User signup:</strong> Every eCOS customer gets account details such  as User name, Password (API Key), Tenant Name, Authentication Service.</p>
          <p><strong>2.  Install Agent/Custom App (via API calls): </strong> eCOS   customer  has    an   option  to  install   Windows/Linux   based  client application  or   developer  your   own   mobile/desktop  app   using   REST  API available for eCOS service.</p>
          <p><strong>3.  Configure Backup and Restore task :</strong> A simple or complex backup task can be  configured using  our  desktop based client application. Any file or  folder backup and  restore task can  be  done manually or automated using the same client</p>
          <div class="my-5 text-center" className="accordian-img"> <img src={backup_restore} alt="ESDS" class="figure-img img-fluid " /> </div>
          <h4 class="blue-text">1.1	Features</h4>
          <strong>Customize Meta Data</strong>
          <p>Customize Meta data, assign unique ID and store file as a single  object. Fetch data in seconds as soon as you feed unique ID. eCOS eliminates the need for web servers and load balancers by fetching details on the web, in real time.</p>
          <strong>Programmatic Data Management</strong>
          <p>Manage data with programmatic interfaces provided by eCOS. Get support for additional functionality like object versioning, replication and movement of objects between different tiers and types of storage.</p>
          <strong>Cross Platform Replication</strong>
          <p>Get off-the-shelf compatibility across cloud and recover objects/ multiple versions of objects, as eCOS runs cross platform replication of data. CAS makes data retrieval easy and builds high redundancy for your enterprise objects, eliminating any loss of data.</p>
          <strong>Secure Objects</strong>
          <p>Safeguard your enterprise data against physical & logical failures, fraudulent users & infrastructure failures as eCOS protects objects at all levels.  Enterprises can achieve the goals  of data compliance & security through eCOS.</p>
          <strong>Ease of Management</strong>
          <p>Organize, manage and monitor your data with the help of a user-friendly GUI without the need of specific  training/ additional knowledge. Get status updates and notifications, via high performance object storage APIs on eCOS.</p>
          <strong>Cost Control</strong>
          <p>Pay as data grows, and zero  down  cost as data shrinks.  eNlight-supported eCOS operates on pay-per-consume billing model which reduces 60-70% of your storage cost.  With a highly interactive user-management tool  with real-time alerts, you can take complete control of costs.</p>
          <h4 class="blue-text mt-5">1.2	Benefits</h4>
          <strong> 1.  Scalability</strong>
          <p>Object storage  is  known   for  its  compatibility  with   cloud   computing,  and   that’s because of  its  unlimited scalability feature.  With  eCOS,  storage  capability will be increased and  decreased automatically and  end  user  does not need to worry  about its scalability. eCOS can handle data growth from  MB to GB and GB to TB without any hassle.</p>
          <strong>2.  Faster Data Retrieval and Better Recovery</strong>
          <p>Each object in the storage environment has its own identifying details, comprised of metadata and  ID number, which the OS reads to retrieve data. Without the need to sift  through file structures,  retrieval is much  faster. Thanks  to the metadata and  ID numbers, users don’t  need to know  an  object’s exact location to retrieve it. Having unrestricted metadata also  allows  storage administrators to implement  their own policies  for  data  preservation, retention  and   deletion. This,  along with  the  way storage nodes are distributed across the structure, makes it easier to reinforce data and create better “disaster recovery” strategies.</p>
          <strong>3.  Cost-effectiveness</strong>
          <p>For organizations that need to store large amounts of data, eCOS solution could  be the  most cost-effective.  Because  it  scales out  much   easier than  other  storage environments, it’s less costly  to store all your data. Plus, if users have a private cloud space, costs can be even lower.  Plus, compared to other systems that are  considered inexpensive  for   these  volumes of   data,  it’s  a  much   more  durable  alternative.</p>
          <strong>4.  Customizable Meta-Data</strong>
          <p>When  it comes to object storage, metadata resides in the objects themselves. There is  no  need to build   databases to associate metadata with   the  objects. Custom metadata can   be   created about an  object  file  based  on  contents,  dates,  user information,  permissions,  etc.   Attributes can  be  changed and   added over   time. Because of custom metadata, object storage is highly searchable. Users  can conduct searches that return a set of files that meet specific criteria, such as what percentage of files  are  of a certain type or created by certain owner. This allows  companies to extract insights from  the big data they possess within their files and identify trends</p>
          <p>Disk [IOPS/TB] automatically improves storage resource utilization. It provides a fair performance between multiple virtual machines running on the same cluster and allows policy-based performance goals to be configured in units of normalized IOPS. Disk [IOPS/TB] manages Disk I/O and prevents VMs from using excess Disk resources, causing Disk I/O bottlenecks. Disk [IOPS/TB] policies set fixed Disk IOPS for every VM to ensure that performance window is observed. </p>

          <p>eNlight Object cloud storage provides read after write consistency where each read-and-write operation is guaranteed to return the most recent version of the data.</p>




          <p>Our object storage is highly resilient, with replication across multiple data centers ensuring exceptional availability and durability</p>
          <p>Hosting websites are supported that use client-side technologies(such as HTML, CSS, and JavaScript), offer services to speed up the distribution of static and dynamic web content, and provide a storage gateway appliance for seamless integration of on-premises data with the cloud</p>
          <p>Object storage should be replicated across multiple DC’s for better resiliency and should be designed for 99.99% availability and 99.99999999999999% (16 9's) durability.</p>

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 12} icon={<Icon id={12} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(12)}>Datalake</AccordionHeader>
         <AccordionBody className="accordina-body">
        <strong>Data Storage </strong>
            <p>HDFS is an open-source storage system which stores the data without no considerations to the datatype and stores huge data in efficient and faster manner and has high fault tolerance. Its distributes the data into chunks and saves them in the multiple data nodes. It also considers storing the replica of the chunks thereby making it fault tolerant. Hence, we choose the HDFS as our base storage system. Below is the HDFS data storage architecture. </p>
            <strong>Data Ingestion </strong>
            <p> Apache NiFi is an open source data ingestion tool which pulls data from a wide range of data sources into HDFS system by creating pipelines. It also provides user an interactive UI for data flow management, security and provenance. Provide Visualization and performance monitoring metrics of the data flow. The Rest API of Nifi helps to command control and alter Nifi Instance in real time. It also has custom processor creativity. Hence Nifi, suits well in our case as we are planning to create custom API flows through our SSP portal.
              Data Security and Governance: - Apache Ranger, AD.</p>
            <strong>Data Streaming </strong>
            <p> Apache Kafka is an open source, distributed streaming platform that enables the development of real-time, event-driven applications. Kafka is а distributed рlаtfоrm it runs as а fаult-tоlerаnt, highly аvаilаble cluster that саn sраn multiрle servers and even multiple data centers. Kаfkа tорiсs аre раrtitiоned аnd reрliсаted in suсh а wаy thаt they саn sсаle tо serve high volumes of simultaneous соnsumers withоut imрасting рerfоrmаnсe.  Аs а result, ассоrding tо Арасhe.оrg, “Kаfkа will рerfоrm the sаme whether yоu hаve 50KB оr 50TB оf рersistent stоrаge оn the server.”</p>
            <strong>Monitoring </strong>
            <p> Kafka-Manager is a UI to manage and create the Kafka topics for streaming data. It provides user better understanding about the Kafka brokers and topics. It also provides data and messages info of published, produced and consumed data by the Kafka.</p>
            <strong>Рrоmetheus </strong>
            <p> is an open source monitoring software which соntributes tо the DevОрs system through mоnitоring аррliсаtiоns аnd infrastructure, аnd with the aid of watching оver masses оf miсrоserviсes. Рrоmetheus mоnitоring eliminates the аmоunt оf alerts in а system, only sending alerts whilst major problems need tо be solved. Furthermоre, the Рrоmetheus Node Exроrter саn be adjusted tо retrieve data from the big apple client, which саn be very helрful. Аlоng with this, Рrоmetheus mоnitоring саn be used tо рrоvide сlаrity into structures аnd how tо run them.</p>
            <strong>Grafana </strong>
            <p> is an open-source visualization web application which create dashboards through the metrics collected from the data source and visualize the data for better understanding. We can also create alerts in the system by indicating the threshold. </p>
            <p>Prometheus acts as a data source to Grafana in our case. Prometheus collects metrics from the different services of our datalake and provide to Grafana for providing the visualized graph of the system. Hence used widely by DevOps as monitoring system.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={service_level_agreement} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 2. Datalake Architecture Design</p>
            </div>
            <p> The Datalake Architecture Design illustrates the architecture we are following to build our datalake in a very cost effective manner using open-source technologies. </p>
            <strong>We have HDFS as our base storage system due to below considerations.</strong> <br />
            <ul>
              <li>Parallel mechanism to distribute huge data into chunks and store them into different nodes</li>
              <li>Replication factor</li>
              <li>Can store data of any format</li>
              <li>High Availability Architecture</li>
              <li>Fault Tolerance</li>
              <li>Low Cost</li>
            </ul>
            <p>Below is the High Level Architectural Diagram of the HDFS system in our Datalake.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={HDFS_HA_Architecture} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 3. HDFS HA Architecture</p>
            </div>
            <p>We are planning to develop a SSP Portal for the users as a deliverable to connect to the datalake services. This is will be primary POV for the users to access the datalake.</p>
            <h4 class="blue-text mt-5">1.4	Data Flow in the DataLake</h4>
            <p>The below Data Flow diagram shows the flow of data into the datalake. The data from different data sources like Object Storage, Web API’s, SFTP, Kafka are ingested to the HDFS storage using the Nifi Templates. Standard Nifi templates are created for storing the data from multiple data sources into our Datalake storage system. The user will access the SSP portal to Insert/Get data in/from different data Sources. This data will then be ingested to the datalake storage via SSP portal standard Data Ingestion phase. The Ingestion phase of the SSP portal will create a bucket, process within the NiFi-registry, NiFi for a particular flow by a user. The stored data within the datalake can be accessed through the HDFS File browser(HUE) system.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={data_flow} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 4. Data Flow Diagram</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={user_pov} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 5. User POV</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={entity_sequence_diagram} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 6. Entity Sequence Diagram</p>
            </div>
            <p>The Entity Sequence Diagram illustrates the ELT procedure within the datalake. </p>
            <ul>
              <li>Step 1: - User will login into SSP Portal</li>
              <li>Step 2: - User will get the data from the list of data sources. If necessary will insert the data into the data sources like into MinIo, SFTP Server etc.</li>
              <li>Step 3: - The Data ingestion technique of SSP will Instantiate a bucket, process and the standard data source template in the process group within the NiFi system. The PUTHDFS processor within the template will Ingest the data from the data source to the HDFS storage.</li>
              <li>Step 4: - The User can then access this data from HUE system built over the HDFS Storage.</li>
            </ul>
            <div class="my-5 text-center" className="accordian-img"> <img src={HDFS_Storage} alt="ESDS" class="figure-img img-fluid " /> </div>
            <h4 class="blue-text mt-5">1.6	Cluster Architecture</h4>
            <p>The Below High Level Node Architecture explains the node distribution for the services of the datalake. </p>
            <p>The implementation divides the server nodes into several roles, and each node has a configuration that is optimized for its role in the cluster. </p>
            <p>The Kubernetes Cluster implementation is a 7 nodes high available cluster deployment consisting of 3 Master Nodes, 3 Worker Nodes and 1 Load Balancer Node.</p>
            <strong>The further Node Description is as below</strong> <strong> Master Nodes</strong>
            <p>Master nodes will consist of Active/Passive Name-nodes and Yarn Resource Managers supporting the cluster operations for High Availability Datalake Storage. Zookeeper will work as the connectivity for the nodes and the Journal Node will be the failover controller as explained in the fig 3. HDFS HA Architecture.</p>
            <strong>Worker Nodes</strong>
            <p>Worker Nodes will consists of Data-nodes and data-node managers supporting the storage and bulk operations of the HDFS storage cluster.</p>
            <strong>Utility Node</strong>
            <p>Utility node will serve the purpose of the Ingestion to the Datalake Storage and will consists of NiFi and Kafka Clusters.</p>
            <strong>Administration Node</strong>
            <p>Administration Node will serve the Monitoring purpose of the datalake services.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={High_Level_Node_Architecture} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 7. High Level Node Architecture.</p>
            </div>
            <p>Designed a simple network where both the master and worker clusters will be attached to the same VLAN and network for faster processing. All machines will be attached to a single network that is Kubernetes Cluster data network which will be connected to the Local network system as per company standards.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={Network_Architecture} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 8. Network Architecture</p>
            </div>
            <p>The prototype is discussed with the figures below.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={Login_Page} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 9. Login Page</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={Home_Page_SSP} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 10. Home Page SSP</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={Dashboard_of_Services} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 11. Dashboard of Services</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={Data_Sources} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 12. Data Sources</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={Data_Ingestion_SSP_API} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 13. Data Ingestion SSP API</p>
            </div>
            <div class="my-5 text-center" className="accordian-img"> <img src={Monitoring_Page_of_Datalake_Services} alt="ESDS" class="figure-img img-fluid " />
              <p class="text-center">Fig 14. Monitoring Page of Datalake Services.</p>
            </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 13} icon={<Icon id={13} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(13)}>Managed ETL Service and Analytics</AccordionHeader>
         <AccordionBody className="accordina-body">
        <strong>ESDS Rubiscape</strong>
            <p> No Code/Less Code End to End Data Science Platform</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={ESDS_Rubiscape} alt="ESDS" class="figure-img img-fluid " /> </div>
            <p>ESDS Rubiscape is a pioneering Data Platform that makes Data Science possible and enjoyable for everyone.</p>
            <p>With a motto of Data ‘decoded’, Future ‘decided’, ESDS Rubiscape brings a paradigm shift in end-to-end data-driven solutions that seamlessly harmonize open source, algorithms, computation, and people, through a process of co-creation and continuous innovation in-sync with evolving needs. </p>
            <strong>Machine Learning Simplified!</strong>
            <p>Rich library of 100+ pre-built ML Algorithms and Functions to build the best models for Statistical Analysis, Accelerate Machine Learning (Supervised, Unsupervised), Natural Language Processing</p>
            <strong>ESDS RubiWise</strong>
            <p>ESDS Rubiscape has applied design thinking principals in crafting RubiWise that aims to Simplify Data Science through effective strategies - Datasets (diverse sources and infrastructures), Skillsets (talents and creativity), Toolsets (ESDS Rubiscape and opensource), Mindset (principles and ethos) to innovate and deliver a value.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={RubiWise} alt="ESDS" class="figure-img img-fluid " /> </div>
            <strong>Simple, Agile, Secure!</strong>
            <p>ESDS Rubiscape is designed to provide agility by seamlessly integrating Plug & Play components that are further customizable based on industry-specific needs & evolving expectations.</p>
            <strong>For Business People</strong>
            <p>Model creation and collaboration is made easy than ever before. Anyone with basic knowledge of Stats can use ESDS Rubiscape. No need to learn any programming.</p>
            <strong>Best In class TCO</strong>
            <p>Highly affordable as it is built with leading edge Opensource technologies and offered on Cloud as SaaS model as against existing proprietary on-premises products.</p>
            <strong>ESDS Rubiscape Platform Stack</strong> <strong>RubiStudio :-  Effortlessly build Analytical Models with a Visual Designer</strong>
            <p>ESDS Rubiscape Designer or a Model Studio is a visual model builder (no-code or low- code, drag and drop) for data scientists to build models, train-test-deploy and publish the selected model. You can reuse models whenever required. You can also integrate Python and R based models and custom coding.</p>
            <strong>RubiFlow :- Orchestrate Data and Workflows for a seamless Collaboration</strong>
            <p>RubiFlow is an integrated Process Designer to help users build and manage data flows with a visual, end-to-end event-based Orchestrator. Data access engines of RubiFlow provides a powerful, easy-to-use user interface that supports collaboration, reuse of processes and common metadata.</p>
            <strong>RubiML :- Boosting Analytical Productivity</strong>
            <p>With RubiML for Predictive Analytics, you can create, test, deploy, and maintain your Predictive Models easily and instantly. RubiML offers interactive data exploration and makes it easy to build and adjust predictive models without any knowledge of coding for boosting your analytical productivity</p>
            <strong>Rubicast :- Efficiently Generate Scientific Forecasts</strong>
            <p>Rubicast is a Forecasting Module to streamline and automate your forecasting process. With RubiCast, you don’t need to manually code your models for exploring and analyzing large volumes of time series data. RubiCast can generate easily and efficiently any number of statistically based trustworthy forecasts.</p>
            <strong>RubiText :- Easily Extract Deeper Insights from Textual Data</strong>
            <p>RubiText simplifies Text Analytics with a set of Linguistic, Statistical, and ML techniques for Word Frequency Analysis, Pattern Recognition, Tagging/Annotation, Information Extraction, Link & Association Analysis and Predictions.</p>
            <strong>RubiSight</strong>
            <p>Rapidly Create Visual Data Stories<br />
              Rubisight tells the Data Story visually. With RubiSight, users can achieve faster dashboard turnaround, flexibility for any subject area, consistent user experience, and effective collaboration across the decision-making process. RubiSight makes the visual Data Discovery easier with Box plot, Heat map, Network diagram, Correlation matrix, Forecasting, Decision tree, Time Zone, Geo Maps, Text objects and many features. </p>
            <strong>RubiThings</strong>
            <p>Smartly Maximize your Business Value with Connected Intelligence<br />
              RubiThings enriches the data experience by the inter-networking of Physical Devices, Vehicles, Buildings, Machines, Electronics, Software, Sensors with IoT and M2M applications.</p>
            <strong>The Platform Architecture</strong>
            <div class="my-5 text-center" className="accordian-img"> <img src={Platform_Architecture} alt="ESDS" class="figure-img img-fluid " /> </div>
            <p>Connecting from different sources of Input data and processing the data through various stages such as Data Integration, Data Science and Data Visualisation. The entire technology stack is inbuilt in a single platform  which ultimately helps the end user to perform different tasks without switching to different platforms.</p>
            <strong>ESDS Rubiscape Dataset Connection</strong>
            <div class="my-5 text-center" className="accordian-img"> <img src={Dataset_Connection} alt="ESDS" class="figure-img img-fluid " /> </div>
            <p>The dataset source in ESDS Rubiscape contains various Social Media Platforms from which the data can be extracted such as</p>
            <ul>
              <li> 1.  Social Media Platforms
                <ul>
                  <li>a.  Twitter (# tags and keywords based)</li>
                  <li>b. RSS (URL)</li>
                  <li>c.  Facebook (@Facebook Page Name) – If permission enabled</li>
                </ul>
              </li>
              <li> 2.  API Connections
                <ul>
                  <li>a.  Google news</li>
                  <li>b. News Website (API Access required)</li>
                  <li>c.  Blogs (API Access required)</li>
                </ul>
              </li>
            </ul>
            <p>This data connections will enable the user to extract the data from the various Social Media Platforms and APIs on a real-time.</p>
            <strong>2.  RubiML and RubiText</strong>
            <p>is an inbuilt toolset of ESDS Rubiscape that encompasses AI, Machine Learning and Natural Language Processing algorithms to automate and enrich the data to derive measurable benefits in terms of intelligence that can be used in the aligned Decision Support Systems.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 14} icon={<Icon id={14} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(14)}>Serverless Computing Platform</AccordionHeader>
         <AccordionBody className="accordina-body">
        <p>'eNlight Cloud Functions' is a FaaS (Functions as a Service) platform which executes functions as per the demands, eliminating server maintenance needs and costs. eNlight Cloud Functions is based upon Apache OpenWhisk which provides a simple and sophisticated platform to deploy functions.</p>
            <p>Serverless' computing relates to the notion of creating and running applications that do not demand server management. It represents a deployment model at a granular level, where applications are a bundle of one or more functions. We upload them to a platform and then they run, auto-scale, and generate a bill as per the particular demand. The term serverless doesn't actually mean that there are no servers involved. We, of course, need them for the codes to function.</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={Serverless_platform} alt="ESDS" class="figure-img img-fluid " /> </div>
            <p>With the ever-changing markets– deploy your applications faster with eNlight Cloud Functions. eNlight Cloud Functions is a Serverless cloud-computing platform where you can deploy your functions which executes in response to triggers or incoming events on demand. Achieve high scalability and take advantage of the pay-per-consume model which guarantees increased cost savings.</p>
            <p>Our serverless cloud computing platform will add a lot of benefits to your business application from development to updates and maintenance. There are several benefits for developers, owners, and users</p>
            <div class="my-5 text-center" className="accordian-img"> <img src={osd} alt="ESDS" class="figure-img img-fluid " /> </div>
            <h4 class="blue-text mt-5"> 3.1	Features</h4>
            <strong>Zero Operations and Maintenance Costs</strong>
            <p>With eNlight Cloud Functions you are free from server and application environment administration as it is a fully managed service provided by us and the overheads like managing servers, virtual machines and containers get eliminated.</p>
            <strong>Flexible On-Demand and Automatic Scaling</strong>
            <p>eNlight Cloud Functions can promptly and accurately scale to serve each individual incoming request. As the traffic levels change, functions automatically scale which is intelligently managed
              by eNlight Cloud</p>
            <strong>Event-driven Way with High Velocity</strong>
            <p>Events trigger the functions. Triggers can be invoked via programmable APIs. Thus your external apps, services and edge systems, can invoke your eNlight Cloud Functions with only the required resources resulting in effective serverless computing.</p>
            <strong>Developers Can Focus on Significant Tasks</strong>
            <p>Your developers don’t need to bug about the OS, infra, language runtime, middleware, its administration and dependencies. They can now focus on the projects directly driving business growth instead of maintenance and time-lag.</p>
            <strong>Granular Pay-Per-Consume Model</strong>
            <p>Your bill is based on memory usage, execution time, and CPU usage. You pay only for the time period when your function executes and the number of functions that performed. Hence, no hourly charge and lesser idle time.</p>
            <h4 class="blue-text mt-5"> 3.2	Use Cases</h4>
            <strong>3.2	Use Cases</strong>
            <ul>
              <li>Independent, concurrent, asynchronous, and easy to parallelize work units</li>
              <li> Infrequent demand, with random and huge scaling variation</li>
              <li> Stateless hence, temporary, without a primary need for immediate cold start duration</li>
              <li> Extremely dynamic due to varying business requirements which need accelerated development mechanism</li>
              </ul>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 15} icon={<Icon id={15} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(15)}>eNlight Bulk Emails Service</AccordionHeader>
         <AccordionBody className="accordina-body">
          <div class="my-5 text-center" className="accordian-img"> <img src={Bulk_Emails_Services} alt="ESDS" class="figure-img img-fluid " /> </div>
          <div class="my-5 text-center" className="accordian-img"> <img src={regional_sms} alt="ESDS" class="figure-img img-fluid " /> </div>
          <div class="my-5 text-center" className="accordian-img"> <img src={key_plantform} alt="ESDS" class="figure-img img-fluid " /> </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 16} icon={<Icon id={16} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(16)}>eNlight Internet Of Things</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p>The wave of eNlight IoT will amplify a platform to help you prototype and scale your IoT applications eNlight IoT has the potential to change the way we interact with our belongings. eNlight IoT is a managed cloud platform that lets connected devices easily and securely interact with cloud applications and other devices. eNlight IoT can support various devices, and can process and route sensor messages to other devices reliably and securely. With eNlight IoT, your applications can keep track of and communicate with all your devices, all the time, even when they aren’t connected. eNlight IoT makes it easy to use Node RED, to build IoT applications that collect, process, analyze, visualize and act on data generated by connected devices, without having to manage any infrastructure.</p>
          <div class="my-5 text-center" className="accordian-img"> <img src={iot} alt="ESDS" class="figure-img img-fluid " /> </div>
          <h4 class="blue-text mt-5">5.1	Features</h4>
          <strong>Device Connection Management</strong>
          <p>eNlight IoT allows you to easily connect devices to the cloud and to other devices. eNlight IoT supports REST(HTTP/S) and MQTT protocols. It is best suited for IoT and M2M communication because of its small code footprint, lower bandwidth requirements and lower power consumption on device. You can actually make your thing talk to you using eNlight IoT. Connecting your devices and interacting with them was never so easy.</p>
          <strong>Secure device Connection, data transfer & Access Control</strong>
          <p>eNlight IoT provides authentication, access control and end-to-end encryption throughout all points of connection, so that data is never exchanged between devices and eNlight IoT without proven identity. In addition, you can secure access to your devices and data by applying access tokens and device tokens.</p>
          <strong>Real-Time Data Management</strong>
          <p>With eNlight IoT, you can collect, filter, transform, and trigger upon device data on the fly, based on business rules you define. You can update your rules to implement new device and application features at any time. eNlight IoT makes it easy to use Node RED services for your device data. You can easily set real-time triggers and notifications on your device data on the fly.</p>
          <strong>Rich Analytics & Insights</strong>
          <p>With eNlight IoT, you can collect, analyze and visualize device data on our Dashboard. You can visualize data with various graphs and widgets. eNlight IoT makes it easy to use Node RED services for your device data to send data to various analytics tools and do real-time analysis of your device data.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 17} icon={<Icon id={17} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(17)}>eNlight Media Service</AccordionHeader>
         <AccordionBody className="accordina-body">
        <p>eNlight Media services in the cloud offer a range of benefits and features that cater to the specific requirements of managing, processing, delivering, and analyzing media content. Here are some key benefits and features of eNlightcloud media services:</p>
			
			<strong>Key Benefits:</strong>  
			
			 <ul>
			    <li><strong> 1.	Scalability:</strong> It allow to scale resources up or down based on demand. This is crucial for handling traffic spikes during events or viral content sharing.</li>
                <li><strong>2.	Cost-Efficiency:</strong> Cloud-based services eliminate the need for large upfront investments in hardware and infrastructure. You pay for what you use, making it more cost-effective.</li>
                <li><strong>3.	Global Reach: </strong>Content can be delivered to users around the world using content delivery networks (CDNs), ensuring low latency and optimal performance for a global audience.</li>
                <li><strong>4.	Flexibility:</strong> Offer a range of tools and services that can be tailored to your specific needs, from video encoding to live streaming and analytics.</li>
                <li><strong>5.	Security:</strong> Robust security features, including encryption, access controls to protect media content from unauthorized access.</li>
			 </ul>
			 
			 
			 <strong> Key Features:</strong>  
			 <ul>
			    <li><strong>1.	Media Processing and Transcoding:</strong> Services for encoding, transcoding, and converting media files to various formats, resolutions, and bit rates, enabling compatibility across devices.</li>
                <li><strong>2.	Live Streaming: </strong>Tools for broadcasting live events or streams to a global audience with adaptive bitrate streaming for optimal playback quality.</li>
                <li><strong>3.	Video Conferencing:</strong> Allows you to host and participate in online meetings, webinars, and video conferences. </li>
                <li><strong>4.	Video Analytics:</strong> Analytics services that provide insights into viewer engagement, watch time, geographic distribution, and other metrics to optimize content strategy.</li>
                <li><strong>5.	Content Delivery Networks (CDNs):</strong> CDNs distribute media content across multiple servers and data centers, reducing latency and ensuring fast and reliable delivery.</li>
                <li><strong>6.	Content Management: </strong>Systems for organizing, categorizing, and managing media assets efficiently, often with metadata and search capabilities.</li>
                <li><strong>7.	Video Editing and Production:</strong> Platforms or tools for editing and producing media content directly in the cloud, enabling collaborative workflows.</li>
                <li><strong>8.	Image and Video Analysis: </strong>AI-driven analysis of media files, including facial recognition, content moderation, and object detection.</li>
                <li><strong>9.	Integration: </strong>APIs and integration options that allow seamless integration with existing systems, applications, and workflows.</li>
            </ul>
			 
			
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 18} icon={<Icon id={18} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(18)}>Content Delivery Network (CDN)</AccordionHeader>
         <AccordionBody className="accordina-body">
          <p>Every day there are numerous instances when we hear users getting frustrated due to the low loading speed of applications, devices and websites. This slowness causes results in lower user experience levels and dissatisfaction. To overcome all user concerns related to latency, bandwidth exhaustion, and a high surge in online traffic, ESDS has developed the India's fastest & highly cost-effective CDN Solutions.</p>
          <p>To address geographically scattered users and their needs, ESDS has deployed multiple regional PoPs (Points of Presence) present all over India. These PoPs are capable of handling high bandwidth.</p>
          <p><strong>For More Details</strong> <a href="https://www.esds.co.in/cdn" target="_blank">CDN</a></p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 19} icon={<Icon id={19} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(19)}>Exit Management and Transition Requirements</AccordionHeader>
         <AccordionBody className="accordina-body">
        <p>Ensuring the continuity and performance of our services is paramount to us, both during the duration of the agreement and beyond, including the exit management period. As your trusted Cloud Service Provider (CSP), we are committed to upholding the highest standards of service delivery, even post expiry of the Agreement.</p>
            <p> <strong>1.	Continuity of Services: </strong>It is our prime responsibility to guarantee uninterrupted service quality throughout the Agreement, including the exit management period. We assure the Government Department that no facility or service will be compromised in any way during this transition phase. Furthermore, we pledge to facilitate a seamless transfer of knowledge to the Replacement Agency (or Government Department), ensuring the continuation of services at the same high standards.</p>
            <p> <strong>2.	Transition Support: </strong>Upon the conclusion or termination of the contract, we are obligated to provide comprehensive handholding and transition support. Our aim is to ensure the Government Department's complete satisfaction with the continuity and performance of the services during this critical phase.</p>
            <p> <strong>3.	Migration Assistance: </strong>We are committed to assisting the Government Department in migrating VMs, data, content, and any other assets to their new environment, be it on alternate cloud service providers' offerings or otherwise. Additionally, we will certify the destruction of VMs, content, and data to prevent forensic recovery, providing the necessary support until the successful deployment and access of services in the new environment.</p>
            <p> <strong>4.	Data Retention and Deletion:</strong> We will refrain from deleting any data at the end of the agreement for a maximum of 45 days beyond the expiry, unless expressly approved by the Government Department.</p>
            <p> <strong>5.	Technical Support: </strong>Throughout the exit/transition management process, it is our responsibility to promptly address and rectify any issues related to the migration of Department applications and IT infrastructure, including the installation or reinstallation of system software.</p>
            <p> <strong>6.	Ownership of Data: </strong>The ownership of data generated during the contract period unequivocally rests with the Government Department at all times, ensuring their complete control and autonomy over their data assets.</p>
            <p> <strong>7.	Documentation Maintenance: </strong>We are committed to maintaining up-to-date documentation, including configuration documents, throughout the contract period. All such documentation will be handed over to the Department during the exit management process to facilitate a smooth transition.</p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 20} icon={<Icon id={20} open={open} />}>
        <AccordionHeader className="btn-of-accordian" onClick={() => handleOpen(20)}>SAP DB Management</AccordionHeader>
         <AccordionBody className="accordina-body">
        <p>SAP DB support offers to manage the critical components at utmost priority, supporting across the landscape and reviewing and recommending the demand as per the usage/need. Monitoring and managing the service's health, performance, and high availability, to bring the components offer maximum uptime by maintaining the SLA to more than expected for HANA, Sybase, and MaxDB databases. With no vendor lock-in, exuberant support from certified Linux & SAP-certified engineers, etc., 
            stay up-to-date and SAP-compliant with updates and upgrades. Take control to customize at every step with enterprise HANA on eNlight.</p>
           
            <br />
		    <p><strong>ESDS's SAP DB Management Offers</strong> </p>
		    
		    <ul>
		        <li>Monitoring using ENlight 360</li>
                <li>Designing for high Uptimes and Performance</li>
                <li>Support for HANA, Sybase, MaxDB, DB2, Oracle databases</li>
                <li>Certified Linux & SAP-certified engineers</li>
                <li>Backup Management</li>
                <li>SAP-complaint Management of updates and upgrades</li>
                <li>High Availability Management</li>
                <li>Disaster Recovery planning and implementation</li>
		        
		    </ul>
        </AccordionBody>
      </Accordion>

    </div>
  );
}