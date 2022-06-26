#pragma once

#include <cppunit/SynchronizedObject.h>
#include <cppunit/TestListener.h>
#include <cppunit/TestFailure.h>


/*! \brief TestListener that checks if any test case failed.
 * \ingroup TrackingTestExecution
 */
class TestSuccessListener : public TestListener,
                                        public SynchronizedObject
{
public:
  /*! Constructs a TestSuccessListener object.
   */
  TestSuccessListener( SynchronizationObject *syncObject = nullptr );

  /// Destructor.
  virtual ~TestSuccessListener() override;

  virtual void reset();

  void addFailure( const TestFailure &failure ) override;

  /// Returns whether the entire test was successful or not.
  virtual bool wasSuccessful() const;

private:
  bool m_success;
};
