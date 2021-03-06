The Finger Track Games

modeled on Google Mediapipe


Need for Hand Tracking.

Hyperparameters used / assumptions made during the project.

How do we study ‘The Landmark Map’?

Does changing the hyperparameters have any effect?

Future Scope?

References


Need for Hand Tracking.


All computer vision problems, involve being aware about the choice of algorithm, underscoring the adeptness of cameras and understanding the system’s performance; to realize a collection of riveting results. Looking over the construct to team up Computer Vision with other technological fields, such as robotics or Natural Language Processing, is a problem, for which we need to fasten our seatbelts. This can be studied at an advanced level separately.

During detection, we need a method for marking hand-based landmarks to get hold of a set of coordinates for all points. Algorithms can be asynchronous, and the programs can be processed on the client-side; and I hand out some experimental results of one such program.

Object detection models are used for loads of goals, such as Augmented Reality, appending more video-based control of elements, and come up with fascinating video based real time end products and features. A lot of researchers have investigated the object detection problem and I try to integrate one extension. I use the device-local approach to detect the object based on privacy aware needs.

Unless the companies are very sure, most of the customer data needs to be private. And considering additional costs of client server transfers of data, client-side programs are cheaper as well as have minimal latency. We can also add several client-side controls of elements / visuals that your application provides / supports.

![](multimedia/Demo_deprimid2.gif)
 
Fig. 1: Demo of the app.


Hyperparameters used / assumptions made during the project.


I have implemented the object detection for the default front cams of laptops / mobile devices instead of for additional webcams or back cameras in mobile devices.

I have assumed on rectangle shaped white object, that will be displayed whenever the hand is detected. The task is to move, rotate and scale this rectangle according to the position of the hand, which is being tracked.

Further assumptions include maximum number of hands to detect as one, minimum confidence to classify detected object as hand as 0.61 and minimum confidence to classify tracked object as hand as 0.61.

![](multimedia/SingleHandBS.png)
 
Fig. 2: Effects of assumptions.


How do we study ‘The Landmark Map’?


This graphical representation of points of concern in a hand is referred to as ‘The Landmarks Map’.

![](multimedia/landmarks_map.jpeg)
 
Fig. 3: ‘The Landmarks Map’.


Does changing the hyperparameters have any effect?


1. Increasing the maximum number of hands to detect leads to higher false positive error rates.

2. Decreasing the minimum confidence of detection leads to higher false positive error rates.

3. Decreasing the minimum confidence of tracking leads to higher false positive error rates.


Future Scope?


1. Replace the rectangle with an obj file of 3d object to produce AR effects.

2. Change the 3d objects according to front end conditions and create avirtual try-on service.

3. Make serious changes to the layout, and produce effects on a webpage, like scrolling.

4. Change background / scenery and take realistic selfies.

5. Upgrading this with a React.JS application, to provide apps in iOS and Android smartphones.


References


1. https://google.github.io/mediapipe/solutions/solutions

2. https://viz.mediapipe.dev/

3. https://github.com/google/mediapipe/tree/master/mediapipe

4. https://github.com/google/mediapipe/tree/master/mediapipe/modules/hand_landmark
 
