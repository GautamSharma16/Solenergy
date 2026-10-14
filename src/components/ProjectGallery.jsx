import React, { useState } from 'react';
import { projectsList, projectCategories } from '../data/projects';
import { Maximize2, X, Building, MapPin, Tag } from 'lucide-react';
import './ProjectGallery.css';

export default function ProjectGallery({ limit, showFilters = true }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsList
    : projectsList.filter(p => p.category === activeCategory);

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div className="project-gallery-wrap">
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="gallery-filter-bar">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {displayedProjects.map((project) => (
          <div 
            key={project.id} 
            className="gallery-item group"
            onClick={() => setSelectedProject(project)}
          >
            <div className="gallery-thumb-wrap">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="gallery-thumb" 
              />
              <div className="gallery-hover-overlay">
                <div className="gallery-zoom-icon">
                  <Maximize2 size={20} />
                </div>
                <div className="gallery-meta-bottom">
                  <span className="gallery-cat-badge">{project.category}</span>
                  <h4 className="gallery-item-title">{project.title}</h4>
                  <div className="gallery-location">
                    <MapPin size={13} />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-card-info">
              <span className="project-client-name">{project.client}</span>
              <h3 className="project-heading">{project.title}</h3>
              <p className="project-cap">{project.capacity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="lightbox-overlay" onClick={() => setSelectedProject(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="lightbox-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <X size={26} />
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="lightbox-img" 
            />

            <div className="lightbox-details">
              <div className="lightbox-header-row">
                <div>
                  <span className="badge-eyebrow dark">{selectedProject.category}</span>
                  <h3 className="lightbox-title">{selectedProject.title}</h3>
                </div>
                <span className="lightbox-cap-pill">{selectedProject.capacity}</span>
              </div>

              <p className="lightbox-desc">{selectedProject.description}</p>

              <div className="lightbox-specs-grid">
                <div className="spec-item">
                  <Building size={16} className="spec-icon" />
                  <div>
                    <span className="spec-lbl">Client / Organization</span>
                    <strong className="spec-val">{selectedProject.client}</strong>
                  </div>
                </div>

                <div className="spec-item">
                  <MapPin size={16} className="spec-icon" />
                  <div>
                    <span className="spec-lbl">Site Location</span>
                    <strong className="spec-val">{selectedProject.location}</strong>
                  </div>
                </div>

                <div className="spec-item">
                  <Tag size={16} className="spec-icon" />
                  <div>
                    <span className="spec-lbl">Project Status</span>
                    <strong className="spec-val">{selectedProject.year}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
