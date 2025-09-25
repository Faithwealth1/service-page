import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import IndustryCard from '@/components/IndustryCard';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const cloudManagedServicesCheckpoints = [
    { text: "24/7 cloud monitoring and support" },
    { text: "Backup, disaster recovery, and compliance" },
    { text: "Proactive issue resolution and optimization" }
  ];

  const cloudNativeCheckpoints = [
    { text: "Microservices architecture" },
    { text: "Serverless application development" },
    { text: "Kubernetes and containerized solutions" }
  ];

  const cloudMigrationCheckpoints = [
    { text: "Post-migration optimization" },
    { text: "Data and application migration" },
    { text: "Comprehensive migration assessment" }
  ];

  const iotSolutionsCheckpoints = [
    { text: "Data collection and analytics" },
    { text: "Secure connectivity and control" },
    { text: "IoT device integration and management" }
  ];

  const devopsCheckpoints = [
    { text: "Automated testing and deployment" },
    { text: "CI/CD pipeline setup and management" },
    { text: "Infrastructure as Code (IaC) implementation" }
  ];

  const bigDataCheckpoints = [
    { text: "Data warehousing and lakes" },
    { text: "Big data strategy and architecture" },
    { text: "Advanced analytics and visualization" }
  ];

  const industries = [
    {
      category: "BANKING & FINANCE",
      title: "Secure and Scalable Solutions for Financial Growth",
      description: "We enable financial institutions to streamline operations, enhance customer experiences, and maintain regulatory compliance with robust cloud and IT solutions."
    },
    {
      category: "HEALTHCARE",
      title: "Transforming Patient Care Through Technology",
      description: "Our cloud solutions help healthcare providers enhance patient outcomes, protect sensitive data, and optimize operations."
    },
    {
      category: "RETAIL & E-COMMERCE",
      title: "Empowering Retailers in the Digital Age",
      description: "From inventory management to personalized customer experiences, we provide solutions that help retailers adapt and thrive."
    },
    {
      category: "MANUFACTURING",
      title: "Optimizing Operations for Greater Efficiency",
      description: "Vontech helps manufacturers leverage technology to streamline processes, reduce costs, and enhance productivity"
    },
    {
      category: "EDUCATION",
      title: "Innovative Solutions for Modern Learning",
      description: "We empower educational institutions to deliver engaging, accessible, and secure learning experiences"
    },
    {
      category: "TECHNOLOGY & STARTUPS",
      title: "Fueling Innovation for Tech Companies & Startups",
      description: "From development environments to scalable hosting, we provide tools and infrastructure to help you succeed."
    }
  ];

  const features = [
    {
      title: "Expertise in multiple industries",
      description: "Our diverse experience across sectors allows us to deliver solutions that align with industry best practices and emerging trends."
    },
    {
      title: "Tailored solutions for unique challenges",
      description: "We design strategies that address your organization's specific needs, ensuring measurable impact and long-term growth."
    },
    {
      title: "Proven success with leading organizations",
      description: "Our track record with top companies demonstrates our ability to drive transformation and deliver results that matter."
    }
  ];

  return (
    <div className="bg-white relative flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <main>
        <HeroSection />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/6c6e6e018e1bb8859c23b53b86e71c715b401422?placeholderIfAbsent=true"
          imageAlt="Cloud Managed Services"
          title="Cloud Managed Services"
          description="We provide end-to-end cloud management solutions, ensuring optimal performance, security, and cost-efficiency. From infrastructure monitoring to disaster recovery, our team handles everything so you can focus on your core business activities."
          checkPoints={cloudManagedServicesCheckpoints}
          imageOnLeft={true}
        />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/e098f21e849c9003b1ccf5de76d85ed2b4ddd9d6?placeholderIfAbsent=true"
          imageAlt="Cloud-Native Development"
          title="Cloud-Native Development"
          description="Leverage our expertise in building cloud-native applications that are scalable, resilient, and aligned with your business objectives. Our solutions are designed to harness the full potential of the cloud."
          checkPoints={cloudNativeCheckpoints}
          imageOnLeft={false}
        />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/a739b0d6e5aa4b1bb6613d502b76a9495d3170f6?placeholderIfAbsent=true"
          imageAlt="Cloud Migration Services"
          title="Cloud Migration Services"
          description="Transition your legacy systems to the cloud with minimal downtime. Our experts design and execute migration strategies that are cost-effective, secure, and aligned with your business goals"
          checkPoints={cloudMigrationCheckpoints}
          imageOnLeft={true}
        />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/3b9518dbb737c90f17cd77c421f5821a96fe2eea?placeholderIfAbsent=true"
          imageAlt="Internet of Things (IoT) Solutions"
          title="Internet of Things (IoT) Solutions"
          description="From smart devices to intelligent networks, our IoT solutions help businesses unlock new opportunities by connecting physical and digital worlds. Transform your operations and gain real-time insights."
          checkPoints={iotSolutionsCheckpoints}
          imageOnLeft={true}
        />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/f76fd5600b0ce7d6df90ffebe26d1f73602e47a0?placeholderIfAbsent=true"
          imageAlt="DevOps Services and Solutions"
          title="DevOps Services and Solutions"
          description="Streamline your development and operations processes with our DevOps expertise. We enable faster delivery of high-quality applications through automation, collaboration, and best practices."
          checkPoints={devopsCheckpoints}
          imageOnLeft={false}
        />

        <ServiceSection
          imageSrc="https://api.builder.io/api/v1/image/assets/1fe23c12aa114c02a439df9b05291582/53a107ad1b058cfe785cb281af7087c9e2225fcf?placeholderIfAbsent=true"
          imageAlt="Big Data Consulting Services"
          title="Big Data Consulting Services"
          description="Unlock the power of big data with our consulting services. We help you collect, process, and analyze massive datasets to uncover actionable insights and drive informed decision-making."
          checkPoints={bigDataCheckpoints}
          imageOnLeft={true}
        />

        <section className="z-0 w-full bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch text-center justify-center max-md:max-w-full">
              <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
                Industries We Serve
              </h2>
              <p className="text-[#393C3D] text-lg font-normal leading-[27px] self-center w-[688px] mt-2 max-md:max-w-full">
                Vontech Group partners with businesses in diverse sectors,
                delivering tailored cloud and IT solutions that empower innovation
                and growth
              </p>
            </div>
            <div className="flex w-full items-center gap-6 flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
              {industries.map((industry, index) => (
                <IndustryCard
                  key={index}
                  category={industry.category}
                  title={industry.title}
                  description={industry.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="z-0 w-full text-center bg-[#FBFBFB] pt-[60px] pb-[120px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
          <div className="w-full max-md:max-w-full">
            <div className="flex w-full flex-col items-stretch justify-center max-md:max-w-full">
              <h2 className="text-4xl font-bold leading-none bg-clip-text max-md:max-w-full">
                Why Choose Vontech for Your Industry?
              </h2>
              <p className="text-[#393C3D] text-lg font-normal leading-[27px] self-center w-[780px] mt-2 max-md:max-w-full">
                Our deep understanding of diverse sectors allows us to create
                tailored solutions that align with your specific needs and goals.
              </p>
            </div>
            <div className="flex w-full items-center gap-6 justify-center flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
