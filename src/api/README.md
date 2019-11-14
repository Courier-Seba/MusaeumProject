# Application Programming Interface Connection

This module contains all the interaction with the back end.
All this functions return a axios promise.

## Organization
The api is an js object with all the refered axios call (promises) to the backend.
All submodules should be named with _ (underscore) since they are private (only used inside the module).
