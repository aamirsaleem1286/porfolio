import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quizapp.JPG";
import blog from "../../Assets/Projects/blog.JPG";
import  blog2 from "../../Assets/Projects/blog2.JPG";
import crudapp from "../../Assets/Projects/crudapp.JPG";
 import olx from "../../Assets/Projects/olx.JPG";
import ecommerce from "../../Assets/Projects/ecommerce.JPG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="My quiz project is an engaging and interactive platform that offers users a chance to test their knowledge and have fun. With a diverse range of subjects and topics to choose from, users can select their preferred category and dive into a world of questions. Each question is presented with four options, allowing users to carefully consider their answers. . The project provides instant. With its user-friendly interface and educational value"
              ghLink="https://github.com/aamirsaleem1286/Quiz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog App"
              description="My blog project is a creative and inspiring platform that aims to captivate readers with a diverse range of topics. Through thoughtful and engaging content, I strive to provide readers with valuable insights, helpful tips, and entertaining stories. Whether it's delving into the world of travel, exploring the realms of art and culture my blog offers a delightful escape With a commitment to quality writing and a genuine passion for sharing knowledge, my blog project seek."
              ghLink="https://github.com/aamirsaleem1286/MyBlogApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce App"
              description="My eCommerce project is a comprehensive online platform that provides a seamless and convenient shopping experience. With a user-friendly interface and an extensive catalog of products, it offers customers a wide range of options to explore and purchase. The project incorporates secure payment gateways, ensuring a safe and reliable transaction process."
              ghLink="https://github.com/aamirsaleem1286/Quiz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olx}
              isBlog={false}
              title="OLX Repo website"
              description="My OLX Repo project is a dynamic and feature-rich platform aimed at creating a robust online marketplace. With a user-friendly interface  allows users to buy and sell products with ease. The repository serves as a centralized hub indiviual  buy it can list their item, complete with detailed descriptions and images. "
              ghLink="https://github.com/aamirsaleem1286/Quiz-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog2}
              isBlog={false}
              title="Blog 2"
              description="My blog discussing the latest trends and innovations, my blog offers a delightful escape and an opportunity to broaden horizons. With a commitment to quality writing and a genuine passion for sharing knowledge, my blog project seeks to foster a vibrant community where readers can connect, learn, and find inspiration in every visit."
              ghLink="https://github.com/aamirsaleem1286/MyBlogApp"             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crudapp}
              isBlog={false}
              title="CRUD App"
              description="My CRUD (Create, Read, Update, Delete) project is a practical and efficient system designed to manage and organize data seamlessly. It provides users with a user-friendly interface that allows them to create new records, retrieve existing information, update data as needed"
              ghLink="https://github.com/aamirsaleem1286/MyBlogApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
