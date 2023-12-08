import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import Course from "../Layout/Course";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import Category from "../Layout/Category";

function HomePage() {
  const [activeFilter, setActiveFilter] = useState("UI/UX Design");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      <Header />
      <section>
        <Hero />
        <section className="bg-blue-100">
          <div className="container mx-auto px-12 sm:px-16 py-4">
            <div className="overflow-hidden">
              <div className="flex py-2 justify-between">
                <h2 className="text-xl font-bold">Kategori Belajar</h2>
                <Link to="/dashbord" className="font-bold text-primary">
                  Lihat Semua
                </Link>
              </div>
            </div>
            <Category />
          </div>
        </section>
        <section className="container mx-auto pb-10 px-12 sm:px-16">
          <div className="overflow-hidden">
            <div className="my-8 mb-0 flex justify-between">
              <h2 className="text-xl font-bold mb-4 sm:mb-0">Kursus Populer</h2>
              <Link to="/all-course" className="font-bold text-primary">
                Lihat Semua
              </Link>
            </div>
            <div className="my-4 flex justify-between">
              <Button
                bgColor={
                  activeFilter === "All"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="All"
                onClick={() => handleFilterChange("All")}
              />
              <Button
                bgColor={
                  activeFilter === "DataScience"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Data Science"
                onClick={() => handleFilterChange("DataScience")}
              />
              <Button
                bgColor={
                  activeFilter === "UI/UX Design"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="UI/UX Design"
                onClick={() => handleFilterChange("UI/UX Design")}
              />
              <Button
                bgColor={
                  activeFilter === "Android Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Android Development"
                onClick={() => handleFilterChange("Android Development")}
              />
              <Button
                bgColor={
                  activeFilter === "Web Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Web Development"
                onClick={() => handleFilterChange("Web Development")}
              />
              <Button
                bgColor={
                  activeFilter === "IOS Development"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="IOS Development"
                onClick={() => handleFilterChange("IOS Development")}
              />
              <Button
                bgColor={
                  activeFilter === "Business Intelligence"
                    ? "bg-primary text-white"
                    : "bg-slate-100"
                }
                text="Business Intelligence"
                onClick={() => handleFilterChange("Business Intelligence")}
              />
            </div>
          </div>
          <Course />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
