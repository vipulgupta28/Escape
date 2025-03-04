import React from "react";
import { motion, Variants } from "framer-motion";

const Blog: React.FC = () => {
  // Animation variants with TypeScript types
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
      >
        <motion.h1
          variants={itemVariants}
          className="text-black font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none relative z-10 selection:bg-black selection:text-white mb-12"
        >
          BLOGS
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 px-4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 selection:bg-black selection:text-white">
              Tech Behind Our App
            </h2>
            <p className="text-lg md:text-xl text-left selection:bg-black selection:text-white mb-6">
              Discover the cutting-edge technologies powering our sustainable travel revolution. 
              From React to Tailwind CSS, here’s how we built this experience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Read More
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1670.jpg"
              alt="Coding Technology"
              className="w-full max-w-md object-cover rounded-lg "
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Post Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-black text-white px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-8 selection:bg-white selection:text-black"
          >
            The Technology Stack Behind Our App
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-lg text-gray-300">
              At the heart of our vehicle renting app lies a robust and modern technology stack. 
              Here’s a deep dive into the tools and frameworks we used to bring this vision to life:
            </p>

            <div>
              <h3 className="text-2xl font-semibold mb-2">1. React with TypeScript</h3>
              <p className="text-gray-300">
                Our frontend is built using <strong>React</strong>, a powerful JavaScript library for 
                creating dynamic user interfaces. We’ve paired it with <strong>TypeScript</strong> 
                to add static typing, ensuring better code quality, scalability, and developer 
                experience. This combination allows us to build reusable components like the ones 
                you see on this page.
              </p>
            </div>

            <div>
  <h3 className="text-2xl font-semibold mb-2">2. Express with TypeScript</h3>
  <p className="text-gray-300">
    The backend HTTP server is built using <strong>Node.js</strong> with the <strong>Express</strong> framework, 
    providing a lightweight yet powerful structure for handling API requests efficiently. Express allows us 
    to create a fast, scalable, and modular backend while ensuring smooth communication with the frontend.
  </p>
  <p className="text-gray-300 mt-2">
    By integrating <strong>TypeScript</strong>, we gain enhanced type safety, preventing runtime errors and 
    improving code maintainability. This enables our developers to write clean, structured, and bug-free 
    backend code with better IDE support and auto-completions.
  </p>
  <p className="text-gray-300 mt-2">
    Our Express backend follows a <strong>RESTful API</strong> design pattern, allowing structured and 
    predictable endpoints for client-server interaction. We also implement <strong>middleware</strong> for 
    request validation, authentication, and logging, ensuring security and performance optimization.
  </p>
  <p className="text-gray-300 mt-2">
    To manage user authentication and security, we use <strong>JWT (JSON Web Tokens)</strong> for 
    token-based authentication and <strong>bcrypt</strong> for password hashing, ensuring that user data 
    remains protected.
  </p>
  <p className="text-gray-300 mt-2">
    Additionally, our backend connects seamlessly with <strong>PostgreSQL</strong> using <strong>Prisma</strong> 
    as an ORM, allowing efficient database interactions with type safety, query optimization, and migrations.
  </p>
</div>


            <div>
              <h3 className="text-2xl font-semibold mb-2">2. Framer Motion</h3>
              <p className="text-gray-300">
                The smooth animations you’re experiencing are powered by <strong>Framer Motion</strong>. 
                This library enables us to create fluid, spring-based animations with minimal code. 
                From staggered reveals to hover effects, Framer Motion brings our UI to life.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">3. Tailwind CSS</h3>
              <p className="text-gray-300">
                For styling, we use <strong>Tailwind CSS</strong>, a utility-first CSS framework. 
                It allows us to rapidly build responsive, consistent designs with a black-and-white 
                theme. Tailwind’s flexibility ensures our app looks great on any device, from mobile 
                to desktop.
              </p>
            </div>

            <div>
  <h3 className="text-2xl font-semibold mb-2">3. Prisma and PostgreSQL</h3>
  <p className="text-gray-300">
    Our backend leverages <strong>PostgreSQL</strong>, a powerful, open-source relational database known for 
    its reliability, performance, and advanced features like ACID compliance, indexing, and JSON support. 
    PostgreSQL ensures data integrity and scalability, making it an ideal choice for handling complex queries 
    and large datasets.
  </p>
  <p className="text-gray-300 mt-2">
    To simplify database interactions, we use <strong>Prisma</strong> as our ORM (Object-Relational Mapper). 
    Prisma provides a type-safe and intuitive API for querying the database, reducing the complexity of 
    traditional SQL queries while improving code maintainability and developer productivity.
  </p>
  <p className="text-gray-300 mt-2">
    With Prisma's schema-based approach, we define our data models in a declarative way and use 
    <strong>Prisma Migrate</strong> to handle database migrations seamlessly. This ensures consistency in 
    database structures across different environments.
  </p>
  <p className="text-gray-300 mt-2">
    Additionally, Prisma offers powerful <strong>query optimizations</strong> and built-in support for 
    <strong>relations, transactions, and connection pooling</strong>, making it an excellent choice for 
    scalable applications.
  </p>
  <p className="text-gray-300 mt-2">
    Our PostgreSQL database is hosted on a cloud platform, ensuring high availability and security. 
    We implement <strong>connection pooling</strong> and <strong>caching strategies</strong> to optimize 
    performance and reduce latency.
  </p>
</div>


            <div>
              <h3 className="text-2xl font-semibold mb-2">4. Component-Based Architecture</h3>
              <p className="text-gray-300">
                We’ve adopted a modular, component-based approach. Each section—whether it’s the 
                hero, mission, or this blog post—is a reusable React component. This makes our 
                codebase maintainable and easy to scale as we add new features.
              </p>
            </div>

            <p className="text-lg text-gray-300">
              Together, these technologies create a fast, responsive, and visually stunning app 
              that aligns with our mission of sustainable travel. Stay tuned for more updates as 
              we continue to innovate!
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-white text-black px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6 selection:bg-black selection:text-white"
          >
            Want to Learn More?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-gray-600"
          >
            Follow our blog for the latest updates on technology, sustainability, and travel innovation.
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;