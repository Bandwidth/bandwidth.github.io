# Step By Step Guide To Number Assignment Using the Bandwidth Dashboard UI (Limited Availability)

This guide is for using the Bandwidth Dashboard UI to assign numbers. If you want to use the REST API, click [here](numberUtilizationReviewAPI.md).

### Bulk assigning up to 5000 TNs with an active end-user

You will notice your portal has a different look to it! In the upper right, you will see a widget with your number utilization percentage titled End-user number utilization.

![endUserNU](../images/nur-images/endUserNU.png)

To understand which numbers need to be assigned, hover your mouse over the “reports” tab in the middle of your dashboard. Choose “Reports Dashboard”.

![reportsDashboard](../images/nur-images/reportsDashboard.png)

There are a couple new reports here, but let’s first focus on the report that will give you a list of your Assigned, Pending Assignment, and Unassigned telephone numbers. Click on the END-USER PHONE NUMBER ASSIGNMENT report.

![endUserPhoneNumberAssignment](../images/nur-images/endUserPhoneNumberAssignment.png)

You can choose All statuses (default), Assigned, Pending Assignment, Unassigned.

![states](../images/nur-images/states.png)

Assigned TNs are TNs where Bandwidth can see traffic, or you have already marked them as assigned with an end-user in the portal, or in the last round of Number Utilization Review.

Pending Assignment TNs are TNs where Bandwidth cannot see traffic (these are the numbers you will want to pull).

Unassigned TNs are TNs that you have previously marked as unassigned and not with an end-user.

Note: You can choose multiple types of TNs to pull at once. Let’s just start with Pending Assignment.

![generateReport](../images/nur-images/generateReport.png)

Your report should begin processing in the upper right hand side of your screen, under Past reports.

![pastReports](../images/nur-images/pastReports.png)

Click on the CSV to download your report! The report name is initially blank and you can refresh your browser to populate the file name. You can open in Microsoft Excel directly but some manual steps may be required with other programs. Upon opening, you will receive a list of TNs.

Column B will read as “unknown” next to each TN.

* Column C will read as “expiry date.” This will only populate on assigned TNs. TN assignment will expire after 120 days. Note: If you are copying and pasting the TNs directly in the upload section, skip to Step 7. 
* You can delete both columns B & C. To do so, select B & C and right click, press delete.

![downloadedCSV](../images/nur-images/downloadedCSV.png)

* Change column A1 from TN to Number. It should look like this:

![updatedCSV](../images/nur-images/updatedCSV.png)

Please compare column A, your full TN list, against your inventory, and check to understand if any of these TNs are active with an end-user. Remove any TNs that are not active with an end-user.

Save this file as a CSV.

Once you have your list of TNs that are ready to be assigned, head back to the Dashboard. Hover over Numbers, and choose Number Assignment:

![numberAssignment](../images/nur-images/numberAssignment.png)

Verify the tab says “LABEL NUMBERS AS ASSIGNED” if this is the action you are choosing.

![labelNumbersAsAssigned](../images/nur-images/labelNumbersAsAssigned.png)

* You can either paste the list of numbers (phone numbers only, no header) in the box, or you can upload the CSV you have created with the Numbers header and TN list.
* If you choose to upload, once you click upload the screen will look like this:

![upload](../images/nur-images/upload.png)

* You can choose an optional customer order ID here. Click “label numbers as assigned”.
* Success! You have assigned your TNs. Please note that the numbers may not show up as assigned immediately, especially if you are assigning in bulk or using your API.

Once you have assigned all TNs active with end-users, the TNs will show up as assigned for 120 days, and your utilization widget on the front page will increase.
<br><br>
