# DEV NOTES

## Dev

### Header-based versioning at the route level


### Nodemon throws error
Run the following command to increase the limit:
``echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf``
and this to apply it:
``sudo sysctl -p``