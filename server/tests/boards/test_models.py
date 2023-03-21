import pytest


def test_board_str(board):
    """Test board string representation"""
    assert board.__str__() == f"{board.name} Board"


def test_column_str(column):
    """Test column string representation"""
    assert column.__str__() == f"{column.name} Column"
