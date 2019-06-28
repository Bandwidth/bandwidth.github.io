default: compile

gitbook_install:
	gitbook install

gitbook_build:
	gitbook build

gitbook_serve:
	gitbook serve

compile: gitbook_install gitbook_build

serve: gitbook_install gitbook_serve
