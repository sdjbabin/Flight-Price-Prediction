# Flight-Price-Prediction
"Flight Price Prediction: GitHub repo for ML-based airline ticket price forecasting. Collect, preprocess data, train models, deploy, and evaluate. Open-source under MIT License."

# Steps for opening the api through python flask in local server
### Step 1: 
Download the folder named "Code"
### Step 2:
Run Command Prompt in the Code folder, and run the following command "python server.py"
### Step 3:
Go to the folder named "Client" inside the "Code" folder and click on "app.html" to preview the api on your local host server.

# Title: Flight Price Prediction Model - Flight Fare-Caster

# Description:

This GitHub repository contains a Python script for building a flight price prediction model using machine learning. The model predicts flight prices based on various input features, such as airline, source city, departure time, stops, arrival time, destination city, and class.

# Project Overview:

# Data Preprocessing:

The dataset is loaded from a CSV file named "flight.csv" using the Pandas library.
Unnecessary columns, including "Unnamed: 0" and "flight," are dropped from the DataFrame.
Descriptive statistics, such as mean, standard deviation, and more, are calculated for the "price" column.

# Outlier Detection and Removal:

Outliers in the data are detected and removed to improve model accuracy. The removal is performed for different subgroups based on categorical features like "airline" and "class."

# Data Encoding:
Categorical variables are encoded into numerical form using one-hot encoding. This step involves creating dummy variables for features like airline, source city, destination city, departure time, stops, and class.
# Model Building:
The data is split into training and testing sets using the train-test split method.
A Linear Regression model is created and trained on the training data.
The model's performance is evaluated using the R-squared score and K-fold cross-validation.

# Grid Search for Model Selection:

Grid search is performed to find the best regression model among Linear Regression, Lasso, and Decision Tree Regressor. Various hyperparameters are tuned to optimize model performance.

# Price Prediction:

### The Decision Tree Regressor model is selected as the best model and used to predict flight prices.
A function is defined to take input features (e.g., airline, source city, etc.) and predict the flight price.

# Model Evaluation:

Model performance is evaluated using metrics such as Mean Squared Error (MSE) and Mean Absolute Percentage Error (MAPE).

# Model Persistence:

The trained Decision Tree Regressor model is saved to a pickle file for future use.
Column names used for encoding are saved to a JSON file for reference.

# Usage:

You can use the saved model for flight price predictions by providing input features.
The "columns.json" file contains a list of column names used for encoding categorical variables.

# Note:

The code can be further extended and improved by exploring additional regression algorithms and feature engineering techniques.

#Contributions:
Soham Chatterjee
Ritwika Das Gupta

Contributions and improvements to this project are welcome. Feel free to fork the repository and submit pull requests.

