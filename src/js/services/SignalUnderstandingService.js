/**
 * Signal Understanding Service - Mock AI NLP / Entity Extraction Engine
 * 
 * Modular service layer designed to be replaced by live LLM / Speech NLP APIs in future phases.
 */

export const SignalUnderstandingService = {
  /**
   * Processes a raw community signal or report draft and extracts structured domain, impacts, and affected groups.
   * @param {Object} signal - The signal object containing description, location, method
   * @param {String} language - Language code ('en', 'hi', 'te')
   * @returns {Object} Structured understanding payload
   */
  understandSignal(signal = {}, language = 'en') {
    const text = (signal.description || '').toLowerCase();
    const location = signal.location?.label || signal.location || 'Gumla District, Jharkhand';

    let primaryDomain = 'Water Quality & Sanitation';
    let relatedDomains = ['Public Health'];
    let issueSummary = 'Observed water quality variation or contamination risk.';
    let affectedGroups = ['Children & Local Families'];
    let possibleImpacts = ['Drinking water quality risk', 'Community health concern'];

    // Rule-based keyword matching (deterministic mock engine)
    if (text.includes('road') || text.includes('bridge') || text.includes('rain') || text.includes('transport')) {
      primaryDomain = 'Rural Infrastructure & Connectivity';
      relatedDomains = ['Public Safety', 'Monsoon Access'];
      issueSummary = 'Road or bridge accessibility issues during monsoon rainfall.';
      affectedGroups = ['Commuters', 'School Students', 'Local Farmers'];
      possibleImpacts = ['Isolated village connectivity', 'Delayed transport'];
    } else if (text.includes('soil') || text.includes('canal') || text.includes('farmer') || text.includes('crop')) {
      primaryDomain = 'Agriculture & Irrigation';
      relatedDomains = ['Soil Degradation', 'Monsoon Drainage'];
      issueSummary = 'Irrigation canal wall degradation and sediment runoff into fields.';
      affectedGroups = ['Smallholder Farmers', 'Agricultural Laborers'];
      possibleImpacts = ['Crop yield loss', 'Farmland soil erosion'];
    } else if (text.includes('sick') || text.includes('illness') || text.includes('doctor') || text.includes('hospital')) {
      primaryDomain = 'Healthcare & Sanitation';
      relatedDomains = ['Epidemic Prevention', 'Clean Water'];
      issueSummary = 'Increased incidence of seasonal health symptoms in the community.';
      affectedGroups = ['Children', 'Elderly Villagers'];
      possibleImpacts = ['Waterborne health risk', 'Medical supply demand'];
    }

    return {
      primaryDomain,
      relatedDomains,
      issueSummary,
      affectedGroups,
      possibleImpacts,
      extractedLocation: location,
      confirmedByCitizen: false,
      processedAt: new Date().toISOString()
    };
  }
};
