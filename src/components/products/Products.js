import React, { Component } from 'react';
import './Products.css';
import Footer from '../footer/footer';

class Slider extends Component {
  state = {
    sections: [
      {
        name: 'PVC',
        products: [
          { 
            name: 'Pipes', 
            ranges: ['4-inch', '6-inch', '8-inch'],
            image: require('./assests/pvc_pipe.jpeg')
          },
          { 
            name: 'Fittings', 
            ranges: ['Elbow', 'Tee', 'Coupler'],
            image: require('./assests/pvc_fittings.jpeg') 
          },
          // { 
          //   name: 'Bundles', 
          //   ranges: ['50m', '100m', '200m'],
          //   image: require('./assests/pvc_bundles.jpeg')
          // }
        ]
      },
      // {
      //   name: 'HDPE',
      //   products: [
      //     { 
      //       name: 'Rolls', 
      //       ranges: ['100GSM', '150GSM', '200GSM'],
      //       image: require('./assests/hdpe_roll.jpeg')
      //     },
      //     { 
      //       name: 'Pipes', 
      //       ranges: ['DR11', 'DR13.5', 'DR17'],
      //       image: require('./assests/hdpe_pipes.jpeg')
      //     }
      //   ]
      // },
      // {
      //   name: 'CPVC',
      //   products: [
      //     { 
      //       name: 'Pipes', 
      //       ranges: ['CTS', 'SDR 13.5', 'Schedule 40'],
      //       image: require('./assests/cpvc_pipe.jpeg')
      //     },
      //     { 
      //       name: 'Fittings', 
      //       ranges: ['Elbow', 'Tee', 'Coupler'],
      //       image: require('./assests/cpvc_fittings.jpeg')
      //     }
      //   ]
      // },
      {
        name: 'uPVC',
        products: [
          { 
            name: 'Pipes', 
            ranges: ['Class 1', 'Class 2', 'Class 3'],
            image: require('./assests/upvc_pipe.jpeg')
          },
          // { 
          //   name: 'Fittings', 
          //   ranges: ['Elbow', 'Tee', 'Coupler'],
          //   image: require('./assests/upvc_fittings.jpeg')
          // }
        ]
      }
    ],
    activeSection: 'PVC'
  };

  setActiveSection = (sectionName) => {
    this.setState({ activeSection: sectionName });
  };

  render() {
    const { sections, activeSection } = this.state;
    const currentSection = sections.find(section => section.name === activeSection);

    return (
      <>
        <div className="product-catalog-container">
          <div className="section-tabs">
            {sections.map(section => (
              <div 
                key={section.name}
                className={`section-tab ${section.name === activeSection ? 'active' : ''}`}
                onClick={() => this.setActiveSection(section.name)}
              >
                {section.name}
              </div>
            ))}
          </div>

          <div className="section-content">
            <h2 className="section-title">{activeSection} Products</h2>
            
            <div className="products-grid">
              {currentSection.products.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-ranges">
                      <h4>Available Ranges:</h4>
                      <ul>
                        {product.ranges.map((range, idx) => (
                          <li key={idx}>{range}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Slider;