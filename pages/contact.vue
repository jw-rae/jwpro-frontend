npm <template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <h1 class="page-title">Get In Touch</h1>
        <p class="page-subtitle">
          Let's discuss your GIS, cloud, or development project
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2 class="section-heading">Send a Message</h2>
            <p class="section-description">
              Fill out the form below and I'll get back to you within 24-48 hours.
            </p>
            
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Name *</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="formData.name"
                  class="form-input"
                  placeholder="Your full name"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="formData.email"
                  class="form-input"
                  placeholder="your@email.com"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="company" class="form-label">Company/Organization</label>
                <input 
                  type="text" 
                  id="company"
                  v-model="formData.company"
                  class="form-input"
                  placeholder="Your company name (optional)"
                >
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <select 
                  id="subject"
                  v-model="formData.subject"
                  class="form-select"
                  required
                >
                  <option value="">Select a subject...</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="consulting">Consulting Inquiry</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="question">Technical Question</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea 
                  id="message"
                  v-model="formData.message"
                  class="form-textarea"
                  rows="6"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </div>
              
              <div class="form-notice">
                <p>
                  * Required fields. Your information will be kept confidential and used only to respond to your inquiry.
                </p>
              </div>
              
              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>
              </button>
              
              <div v-if="submitStatus === 'success'" class="form-message success">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
              
              <div v-if="submitStatus === 'error'" class="form-message error">
                ✗ There was an error sending your message. Please try again or email directly.
              </div>
            </form>
          </div>
          
          <!-- Contact Info Sidebar -->
          <aside class="contact-sidebar">
            <div class="contact-card">
              <h3 class="contact-card-title">Direct Contact</h3>
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="method-icon">📧</div>
                  <div class="method-content">
                    <div class="method-label">Email</div>
                    <a href="mailto:jack@example.com" class="method-value">
                      jack@example.com
                    </a>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">💼</div>
                  <div class="method-content">
                    <div class="method-label">LinkedIn</div>
                    <a href="https://linkedin.com/in/jackgeo" target="_blank" rel="noopener noreferrer" class="method-value">
                      linkedin.com/in/jackgeo
                    </a>
                  </div>
                </div>
                
                <div class="contact-method">
                  <div class="method-icon">🐙</div>
                  <div class="method-content">
                    <div class="method-label">GitHub</div>
                    <a href="https://github.com/jackgeo" target="_blank" rel="noopener noreferrer" class="method-value">
                      github.com/jackgeo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="contact-card">
              <h3 class="contact-card-title">Availability</h3>
              <div class="availability-info">
                <div class="availability-item">
                  <span class="status-indicator available"></span>
                  <span>Open to freelance projects</span>
                </div>
                <div class="availability-item">
                  <span class="status-indicator available"></span>
                  <span>Available for consulting</span>
                </div>
                <div class="availability-item">
                  <span class="status-indicator available"></span>
                  <span>Remote-friendly</span>
                </div>
              </div>
              <p class="availability-note">
                Typical response time: 24-48 hours
              </p>
            </div>
            
            <div class="contact-card">
              <h3 class="contact-card-title">Services</h3>
              <ul class="services-list">
                <li>GIS platform architecture</li>
                <li>Azure cloud consulting</li>
                <li>Spatial data pipeline development</li>
                <li>Web mapping applications</li>
                <li>Technical documentation</li>
                <li>Code review & auditing</li>
              </ul>
            </div>
            
            <div class="contact-card">
              <h3 class="contact-card-title">Location</h3>
              <p class="location-text">
                🌍 Remote-first<br>
                🕐 Timezone: EST (UTC-5)<br>
                ✈️ Available for travel
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">What types of projects do you work on?</h3>
            <p class="faq-answer">
              I specialize in GIS engineering, Azure cloud architecture, and full-stack web development.
              This includes spatial data pipelines, web mapping applications, cloud infrastructure design,
              and custom geospatial solutions.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">What are your rates?</h3>
            <p class="faq-answer">
              Rates vary based on project scope, complexity, and timeline. I offer both hourly and
              project-based pricing. Contact me with your project details for a custom quote.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Do you work with startups?</h3>
            <p class="faq-answer">
              Yes! I enjoy working with startups and early-stage companies. I can help you build
              scalable GIS solutions and cloud infrastructure from the ground up.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Can you help with existing projects?</h3>
            <p class="faq-answer">
              Absolutely. I can join existing projects for code review, architecture consulting,
              performance optimization, or taking over development work.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Do you offer training or workshops?</h3>
            <p class="faq-answer">
              Yes, I provide technical training on GIS tools, Azure services, and web development
              for teams looking to upskill. Custom workshops can be tailored to your needs.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">What's your typical timeline?</h3>
            <p class="faq-answer">
              Project timelines depend on scope and complexity. Small projects may take 1-2 weeks,
              while larger implementations can span several months. I provide detailed estimates
              during the initial consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Contact Jack George | GIS & Cloud Consulting',
  description: 'Get in touch for GIS engineering, cloud architecture consulting, and freelance development projects.',
  ogTitle: 'Contact Jack George | GIS & Cloud Consulting',
})

const formData = reactive({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  
  // Simulate form submission - replace with actual API call
  try {
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // In production, this would be an actual API call:
    // await $fetch('/api/contact', {
    //   method: 'POST',
    //   body: formData
    // })
    
    submitStatus.value = 'success'
    
    // Reset form
    formData.name = ''
    formData.email = ''
    formData.company = ''
    formData.subject = ''
    formData.message = ''
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-hero {
  padding: var(--space-3xl) 0 var(--space-2xl);
  background: linear-gradient(135deg, 
    var(--color-bg-primary) 0%, 
    color-mix(in srgb, var(--color-brand-primary) 5%, var(--color-bg-primary)) 100%
  );
  text-align: center;
}

.page-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

/* Contact Content */
.contact-content {
  padding: var(--space-4xl) 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: var(--space-3xl);
}

.section-heading {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.section-description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-2xl);
  line-height: var(--line-height-relaxed);
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.form-label {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.form-input,
.form-select,
.form-textarea {
  padding: var(--space-md);
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-md);
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
  font-family: inherit;
  transition: all var(--transition-fast);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-primary) 15%, transparent);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-notice {
  padding: var(--space-md);
  background: var(--color-surface-secondary);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.form-message {
  padding: var(--space-md);
  border-radius: var(--border-radius-md);
  font-weight: var(--font-weight-medium);
  text-align: center;
}

.form-message.success {
  background: color-mix(in srgb, var(--color-success) 15%, transparent);
  color: var(--color-success-dark);
  border: 1px solid color-mix(in srgb, var(--color-success) 30%, transparent);
}

.form-message.error {
  background: color-mix(in srgb, var(--color-error) 15%, transparent);
  color: var(--color-error-dark);
  border: 1px solid color-mix(in srgb, var(--color-error) 30%, transparent);
}

/* Contact Sidebar */
.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.contact-card {
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
}

.contact-card-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-lg);
  color: var(--color-text-primary);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.contact-method {
  display: flex;
  gap: var(--space-md);
  align-items: flex-start;
}

.method-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.method-content {
  flex: 1;
}

.method-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: var(--space-xs);
  font-weight: var(--font-weight-medium);
}

.method-value {
  color: var(--color-text-link);
  text-decoration: none;
  word-break: break-all;
}

.method-value:hover {
  text-decoration: underline;
}

.availability-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.availability-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-indicator.available {
  background: var(--color-success);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-success) 30%, transparent);
}

.availability-note {
  padding: var(--space-md);
  background: var(--color-surface-secondary);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
  text-align: center;
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list li {
  padding: var(--space-sm) 0;
  padding-left: var(--space-lg);
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

.services-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-brand-primary);
  font-weight: bold;
}

.location-text {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* FAQ Section */
.faq-section {
  padding: var(--space-4xl) 0;
  background: var(--color-bg-secondary);
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-3xl);
  color: var(--color-text-primary);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-xl);
}

.faq-item {
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-xl);
  padding: var(--space-xl);
}

.faq-question {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-md);
  color: var(--color-text-primary);
}

.faq-answer {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
  
  .contact-sidebar {
    order: 2;
  }
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
