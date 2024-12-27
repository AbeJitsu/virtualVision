import routes from '../../router/routes'; // Correct import path for routes

// Placeholder structure for missing entries
const defaultMessage = {
  dominantTagline: '',
  influentialTagline: '',
  supportiveStatement: '',
  dominantStatement: '',
  influentialStatement: '',
  conscientiousStatement: '',
  supportiveSummary: '',
  influentialPrompt: '',
  leftButtonText: '',
  rightButtonText: '',
};

// Explicit type for Messages object
interface MessagesType {
  [key: string]: typeof defaultMessage;
}

// Dynamic Messages object based on routes
export const Messages: MessagesType = routes.reduce(
  (acc: MessagesType, route) => {
    if (route.name && typeof route.name === 'string') {
      acc[route.name] = acc[route.name] || defaultMessage; // Add route with placeholder if missing
    }
    return acc;
  },
  {} as MessagesType
);

export default Messages;

// src / data / messages / SalesStrategyMessages.ts;
