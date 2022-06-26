#pragma once

#include <cppunit/TestSuccessListener.h>
#include <deque>

/*! \brief Collects test result.
 * \ingroup WritingTestResult
 * \ingroup BrowsingCollectedTestResult
 * 
 * A TestResultCollector is a TestListener which collects the results of executing 
 * a test case. It is an instance of the Collecting Parameter pattern.
 *
 * The test framework distinguishes between failures and errors.
 * A failure is anticipated and checked for with assertions. Errors are
 * unanticipated problems signified by exceptions that are not generated
 * by the framework.
 * \see TestListener, TestFailure.
 */
class TestResultCollector : public TestSuccessListener
{
public:
  typedef std::deque<TestFailure *> TestFailures;
  typedef std::deque<Test *> Tests;


  /*! Constructs a TestResultCollector object.
   */
  TestResultCollector( SynchronizationObject *syncObject = nullptr );

  /// Destructor.
  virtual ~TestResultCollector() override;

  void startTest( Test *test ) override;
  void addFailure( const TestFailure &failure ) override;

  virtual void reset() override;

  virtual int runTests() const;
  virtual int testErrors() const;
  virtual int testFailures() const;
  virtual int testFailuresTotal() const;

  virtual const TestFailures& failures() const;
  virtual const Tests &tests() const;

protected:
  void freeFailures();

  Tests m_tests;
  TestFailures m_failures;
  int m_testErrors;

private:
  /// Prevents the use of the copy constructor.
  TestResultCollector( const TestResultCollector &copy );

  /// Prevents the use of the copy operator.
  void operator =( const TestResultCollector &copy );
};
