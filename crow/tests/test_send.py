import re
import os
import utils

BASEDIR = os.path.dirname(__file__)


def test_email():
    utils.sendReportEmail("Test report", "Report attached", ["%s/test_re.c"%BASEDIR])

def test_issue():
    title = 'Pretty title'
    body = 'Beautiful body'
    assignee = 'Jacarte'
    milestone = 1
    closed = False
    labels = [
        "bug"
    ]

    utils.make_github_issue(title, body, assignee, milestone, closed, labels)