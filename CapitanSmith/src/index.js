//index.js

import { updateActivity } from './activity.js';

// Initially update the activity
updateActivity();

// Update the activity every minute
setInterval(updateActivity, 60000);
